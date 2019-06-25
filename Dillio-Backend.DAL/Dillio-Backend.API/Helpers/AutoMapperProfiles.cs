using AutoMapper;
using Dillio_Backend.API.ViewModel;
using Dillio_Backend.BLL.Core.Domain;

namespace Dillio_Backend.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Image, ImageCreationViewModel>().ReverseMap();
            CreateMap<Image, ImageToReturnViewModel>().ReverseMap();
            CreateMap<Specs, SpecsViewModel>().ReverseMap();
            CreateMap<Image, ImageCloudViewModel>().ReverseMap();
            CreateMap<Product, ProductEditViewModel>().ReverseMap();
            CreateMap<Product, ProductPartialUpdate>().ReverseMap();
            CreateMap<ProductPartialUpdate, ProductEditViewModel>().ReverseMap();
            CreateMap<Review, ReviewViewModel>().ReverseMap();

        }
    }
}