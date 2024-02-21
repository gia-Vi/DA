using Backend.Models;
using Backend.Models.Dtos;

namespace Backend.Services.RepositoryServices
{
    public class NghiPhepRepositoryServices : BaseRepositoryServices<Nghiphep>
    {
        public NghiPhepRepositoryServices(CnttContext context) : base(context)
        {
        }

        public  async Task<Nghiphep?> FindByIdAsync(int maNghiPhep)
        {
            return await FindAsync(maNghiPhep);
        }

        public async Task<List<Nghiphep>> FindAll(int top, int skip, string? filter)
        {
            return await FindAllAsync(top, skip, filter);
        }

        public async Task<List<Nghiphep>> FindAllNghiPhepUserAsync(int maNguoiDung)
        {
            return _context.Nghipheps.Where(ot => ot.Manguoidung == maNguoiDung).ToList();
        }

        public async Task<PostDto> AddNghiPhep(Nghiphep nghiPhep)
        {
            try
            {
                await AddAsync(nghiPhep);
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
