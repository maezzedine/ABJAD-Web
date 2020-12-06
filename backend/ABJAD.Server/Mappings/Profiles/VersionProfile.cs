using ABJAD.Server.Models;
using ABJAD.Server.Models.Dtos;
using AutoMapper;
using System.Linq;

namespace ABJAD.Server.Mappings.Profiles
{
    public class VersionProfile : Profile
    {
        public VersionProfile()
        {
            CreateMap<Version, VersionSummaryDto>();
            CreateMap<Version, VersionDto>()
                .ForMember(dest => dest.Articles,
                    opt => opt.MapFrom(src => src.Articles.Select(va => va.Article)));
        }
    }
}
