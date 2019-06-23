namespace Dillio_Backend.BLL.Core.Domain
{
    public class Specs
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
    }
}