using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Dillio_Backend.API.Helpers;
using Dillio_Backend.API.ViewModel;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/images")]
    [ApiController]
    public class ImageUploadController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;

        public ImageUploadController(IUnitOfWork unitOfWork, IMapper mapper,
            IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _cloudinaryConfig = cloudinaryConfig;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);
        }
        [HttpPost]
        public async Task<IActionResult> AddProductImage(
            [FromForm]ImageCreationViewModel imageCreationVM,
            string folder)
        {
            var file = imageCreationVM.File;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Folder = folder

                    };

                    uploadResult = _cloudinary.Upload(uploadParams);

                }
            }

            if (uploadResult.Error != null)
            {
                return BadRequest("Could not upload the image/s");
            }

            imageCreationVM.Url = uploadResult.Uri.ToString();
            imageCreationVM.PublicId = uploadResult.PublicId;

            var image = _mapper.Map<Image>(imageCreationVM);

            var imageToReturn = _mapper.Map<ImageToReturnViewModel>(image);
            return Ok(imageToReturn);
        }

        [HttpDelete()]
        public async Task<IActionResult> DeleteImage(string publicId)
        {

            if (publicId == null)
            {
                return BadRequest();
            }

            var deleteParams = new DeletionParams(publicId);

            var result = _cloudinary.Destroy(deleteParams);

            if (result.Result == "ok")
            {
                return Ok();
            }

            return BadRequest("Failed to delete the photo");
        }
    }
}