/** Shared OAuth env checks — used by AuthModule registration and request guards. */

export function isGoogleOAuthConfigured(): boolean {
  return !!(
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET &&
    process.env.GOOGLE_CALLBACK_URL
  );
}

export function isGithubOAuthConfigured(): boolean {
  return !!(
    process.env.GITHUB_CLIENT_ID &&
    process.env.GITHUB_CLIENT_SECRET &&
    process.env.GITHUB_CALLBACK_URL
  );
}

export function isFortyTwoOAuthConfigured(): boolean {
  return !!(
    process.env.FORTYTWO_CLIENT_ID &&
    process.env.FORTYTWO_CLIENT_SECRET &&
    process.env.FORTYTWO_CALLBACK_URL
  );
}

export function getConfiguredOAuthProviders() {
  return {
    google: isGoogleOAuthConfigured(),
    github: isGithubOAuthConfigured(),
    fortytwo: isFortyTwoOAuthConfigured(),
  };
}
