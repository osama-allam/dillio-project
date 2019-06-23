using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.DAL.Persistence;
using IdentityServer4.Validation;

namespace Dillio_Backend.IdentityServer
{
    public class ResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
    {
        private IUnitOfWork _unitOfWork;

        public ResourceOwnerPasswordValidator(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
        {
            //var user = await _unitOfWork.ApplicationUser.Get(context.UserName);
        }
    }
}
