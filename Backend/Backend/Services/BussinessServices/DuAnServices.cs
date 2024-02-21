using AutoMapper;
using Backend.Models;
using Backend.Models.Dtos;
using Backend.Services.RepositoryServices;

namespace Backend.Services.BussinessServices
{
    public class DuAnServices
    {
        private readonly IMapper _mapper;
        private readonly DuAnRepositoryServices _duAnRepositoryServices;
        public DuAnServices(IMapper mapper, DuAnRepositoryServices duAnRepositoryServices)
        {
            _mapper = mapper;
            _duAnRepositoryServices = duAnRepositoryServices;
        }
        public async Task<Duan?> FindByIdAsync(int maDuAn)
        {
            return await _duAnRepositoryServices.FindByIdAsync(maDuAn);
        }
        public async Task<List<Duan>> FindAllAsync(int top, int skip, string? filter)
        {
            return await _duAnRepositoryServices.FindAllAsync(top, skip, filter);
        }
        public async Task<PostDto> AddDuAn(Duan duAn)
        {
            if (duAn == null)
            {
                return new PostDto
                {
                    Success = 0,
                    Message = "Du an khong hop le"
                };
            }
            else
            {
                PostDto result = await _duAnRepositoryServices.AddDuAn(duAn);
                return result;
            }
        }
    }
}
