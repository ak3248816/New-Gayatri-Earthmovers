import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would integrate with a service like Resend, SendGrid, or Nodemailer
    // to actually send the email. For this demo, we'll just log it.
    
    console.log('--- NEW INQUIRY RECEIVED ---');
    console.log(`Name:   ${body.name}`);
    console.log(`Phone:  ${body.phone}`);
    console.log(`Brand:  ${body.brand}`);
    console.log(`Part:   ${body.part}`);
    console.log(`Msg:    ${body.message || 'N/A'}`);
    console.log('----------------------------');

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
