const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const resolveUrl = (path: string) => `${baseUrl}${path}`;

export const GET_CONTENTS = resolveUrl('/contents');