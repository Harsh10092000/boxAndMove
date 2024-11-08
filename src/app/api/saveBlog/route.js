
import fs from 'fs';
import path from 'path';


export async function POST(req) {
  try {
    const { content, slug } = await req.json();
    const filePath = path.join(process.cwd(), `_POST/${slug}.md`);
    fs.writeFileSync(filePath, content);

    console.log('File created successfully:', filePath);
    return new Response(JSON.stringify({ message: 'File created successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error creating file:', error);
    return new Response(JSON.stringify({ message: 'Error creating file' }), { status: 500 });
  }
}


export async function PUT(req) {
  try {
    const { content, slug } = await req.json();
    const filePath = path.join(process.cwd(), `_POST/${slug}.md`);
    fs.writeFileSync(filePath, content);

    console.log('File created successfully:', filePath);
    return new Response(JSON.stringify({ message: 'File created successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error creating file:', error);
    return new Response(JSON.stringify({ message: 'Error creating file' }), { status: 500 });
  }
}



export async function DELETE(req) {
  try {
    const { slug } = await req.json();
    console.log("slug : " , slug);
    if (!slug) {
      return new Response(JSON.stringify({ message: 'Slug is required' }), { status: 400 });
    }
    const filePath = path.join(process.cwd(), '_POST', `${slug}.md`);
    const updatedPath = path.join(process.cwd(), '_recyclebin', `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ message: 'Blog not found' }), { status: 404 });
    }

   // fs.unlinkSync(filePath); // for deleting
   fs.renameSync(filePath, updatedPath);

    console.log(`Blog post with slug ${slug} deleted successfully from ${filePath}`);

    return new Response(JSON.stringify({ message: 'Blog deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return new Response(JSON.stringify({ message: 'Error deleting blog' }), { status: 500 });
  }
}
