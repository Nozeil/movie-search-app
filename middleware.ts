import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.API_KEY;

export const middleware = (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Authorization', `Bearer ${API_KEY}`);

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
};
