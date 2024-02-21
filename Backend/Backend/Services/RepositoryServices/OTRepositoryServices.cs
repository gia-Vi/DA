using Backend.Models;
using Backend.Models.Dtos;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.RepositoryServices
{
    public class OTRepositoryServices : BaseRepositoryServices<Dangkiot>
    {
        public OTRepositoryServices(CnttContext context) : base(context)
        {

        }

        public async Task<Dangkiot?> FindByIdAsync(int maDangKiOT)
        {
            return await FindAsync(maDangKiOT);
        }

        public async Task<List<Dangkiot>> FindAll(int top, int skip, string? filter)
        {
            return await FindAllAsync(top, skip, filter);
        }

        public async Task<List<Dangkiot>> FindAllOTUserAsync(int maNguoiDung)
        {
            return _context.Dangkiots.Where(ot => ot.Manguoidung == maNguoiDung).ToList();
        }


        public async Task<Dangkiot> FindByDate(int maNguoiDung, string startRequest)
        {
            DateTime startDate, endDate;
            Dangkiot ot = new Dangkiot();
            if (DateTime.TryParse(startRequest, out startDate))
            {
                ot = await _context.Dangkiots.FirstOrDefaultAsync(diemDanh => diemDanh.Giobatdau.Date == startDate.Date && diemDanh.Manguoidung == maNguoiDung);
                if (ot == null)
                {
                    return null;
                }
                return ot;
            }
            else
            {
                return null;
            }
        }

        public async Task<PostDto> AddOT(Dangkiot dangkiot)
        {
            try
            {
                await AddAsync(dangkiot);
                return new PostDto
                {
                    Success = 1,
                };
            }
            catch (Exception ex)
            {
                return new PostDto
                {
                    Success = 0,
                    Message = ex.Message
                };
            }                           
        }
    }
}
