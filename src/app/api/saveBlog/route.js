// src/app/api/saveBlog/route.js

import fs from 'fs';
import path from 'path';

// Named export for the POST method
export async function POST(req) {
  try {
    const { content } = await req.json();  // Extract JSON content from the request body

    const filePath = path.join(process.cwd(), '_POST/new-file1.md');
    
    // Write the content to a file
    fs.writeFileSync(filePath, content);

    console.log('File created successfully:', filePath);
    return new Response(JSON.stringify({ message: 'File created successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error creating file:', error);
    return new Response(JSON.stringify({ message: 'Error creating file' }), { status: 500 });
  }
}
