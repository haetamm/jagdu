const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
];

export function validateOrigin(request: Request): {
  valid: boolean;
  reason?: string;
} {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  if (!origin && !referer) {
    return {
      valid: false,
      reason: "Missing Origin and Referer headers",
    };
  }

  // Cek Origin header (ada di semua fetch request dari browser)
  if (origin) {
    const isAllowed = ALLOWED_ORIGINS.some(
      (allowed) => origin === allowed || origin.startsWith(allowed),
    );
    if (!isAllowed) {
      return {
        valid: false,
        reason: `Origin '${origin}' not allowed`,
      };
    }
    return { valid: true };
  }

  if (referer) {
    const isAllowed = ALLOWED_ORIGINS.some((allowed) =>
      referer.startsWith(allowed),
    );
    if (!isAllowed) {
      return {
        valid: false,
        reason: `Referer '${referer}' not allowed`,
      };
    }
    return { valid: true };
  }

  return { valid: false, reason: "Could not validate request source" };
}
