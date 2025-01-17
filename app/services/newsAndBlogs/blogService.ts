import BlogDto from '@/app/dto/newsAndBlogs/blogDto';

const BlogService = async () : Promise<BlogDto[]> => 
{
    let blogContent : BlogDto[] = [];
    try {
        const requestSource = "/api/newsAndBlogs/getBlogContent";
        const response = await fetch(requestSource, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        const responseJson = await response.json();
        if(responseJson.status == true){
            blogContent = responseJson.data;
        }
    } catch (err) {
        console.log(err);
    }    
    return blogContent;
}

export default BlogService;