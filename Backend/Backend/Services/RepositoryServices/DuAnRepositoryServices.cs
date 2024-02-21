using Backend.Models;
using Backend.Models.Dtos;

namespace Backend.Services.RepositoryServices
{
    public class DuAnRepositoryServices : BaseRepositoryServices<Duan>
    {
        public DuAnRepositoryServices(CnttContext context) : base(context)
        {
        }

        public async Task<Duan?> FindByIdAsync(int maDuAn)
        {
            return await FindAsync(maDuAn);
        }

        public async Task<List<Duan>> FindAll(int top, int skip, string? filter)
        {
            return await FindAllAsync(top, skip, filter);
        }

        public async Task<PostDto> AddDuAn(Duan duAn)
        {
            try
            {
                await AddAsync(duAn);
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
