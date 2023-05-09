namespace API.ViewModels.Requests;

public class PaginatedRequestModel
{
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 10;
}