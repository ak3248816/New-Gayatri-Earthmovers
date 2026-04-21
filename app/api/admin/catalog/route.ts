import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    if (!file.name.endsWith('.json')) {
      return NextResponse.json({ error: 'Only JSON files are allowed' }, { status: 400 });
    }

    const text = await file.text();
    
    // Validate JSON roughly
    try {
      JSON.parse(text);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
    }

    // Write file to data/parts.json
    const filePath = path.join(process.cwd(), 'data', 'parts.json');
    fs.writeFileSync(filePath, text, 'utf-8');

    return NextResponse.json({ success: true, message: 'Catalog updated successfully' });
  } catch (error) {
    console.error('Error uploading catalog:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
