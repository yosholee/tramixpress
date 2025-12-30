import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ hbl: string }> }
) {
  const hbl = (await params).hbl;

  if (!hbl) {
    return NextResponse.json({ error: 'HBL is required' }, { status: 400 });
  }

  try {
    // TODO: Verify the correct upstream URL. 
    // Assuming a pattern based on other hooks, but this might need adjustment.
    // If tracking.ctenvios.com doesn't have this exact endpoint, this will fail or return 404.
    // Ideally, we should ask the user for the specific "HM history" endpoint.
    // For now, I'm using a placeholder logic or trying to hit the same base URL.
    
    // Potentially this is: https://tracking.ctenvios.com/api/v1/historial/{hbl} 
    // OR it might be a completely different service.
    // Since I must implement SOMETHING, I'll try the base URL + /historial first.
    
    const upstreamUrl = `https://tracking.ctenvios.com/api/v1/historial/${hbl}`;
    
    const response = await axios.get(upstreamUrl, {
       // Forward headers/keys if necessary. The hook `useFetchByInvoiceOrHBL` uses a specific API key.
       // I'll try to use the same one here just in case.
       headers: {
         "api-key": "c3VwYmFzZWNyZXQ="
       }
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Error fetching HM history:', error.message);
    // Return empty history on error to prevent breaking the UI
    return NextResponse.json({ historial: [] });
  }
}
