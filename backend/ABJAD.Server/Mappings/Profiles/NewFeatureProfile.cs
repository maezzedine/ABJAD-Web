using ABJAD.Server.Models;
using ABJAD.Server.Models.Dtos;
using AutoMapper;

namespace ABJAD.Server.Mappings.Profiles
{
    public class NewFeatureProfile : Profile
    {
        public NewFeatureProfile()
        {
            CreateMap<NewFeature, NewFeatureSummaryDto>();
            CreateMap<NewFeature, NewFeatureDto>();
        }
    }
}
