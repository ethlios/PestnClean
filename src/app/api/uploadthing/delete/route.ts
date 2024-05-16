import { UTApi } from "uploadthing/server";

export async function DELETE(request: Request) {
    const data = await request.json();
    const newUrl = data.url.substring(data.url.lastIndexOf("/") + 1);
    
    const utapi = new UTApi();
    const deleteResult = await utapi.deleteFiles(newUrl);

    if (deleteResult.success) {
        return Response.json({ message: "Success" });
    } else {
        return Response.json({ error: "Failed to delete file" },{status: 400});
    }
}