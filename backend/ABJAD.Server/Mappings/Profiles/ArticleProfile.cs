using ABJAD.Server.Models;
using ABJAD.Server.Models.Dtos;
using AutoMapper;
using System.Linq;

namespace ABJAD.Server.Mappings.Profiles
{
    public class ArticleProfile : Profile
    {
        public ArticleProfile()
        {
            CreateMap<Article, ArticleSummaryDto>();
            CreateMap<Article, ArticleDto>()
                .ForMember(dest => dest.Versions, 
                    opt => opt.MapFrom(src => src.Versions.Select(av => av.Version)));
        }
    }
}
