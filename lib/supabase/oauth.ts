import {
	AuthError,
	OAuthResponse,
	SupabaseClient,
} from '@supabase/supabase-js';

export const signInWithGithub = async (
	supabase: SupabaseClient
): Promise<OAuthResponse> => {
	return await supabase.auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo: location.origin + '/auth/callback',
		},
	});
};

export const signInWithGoogle = async (
	supabase: SupabaseClient
): Promise<OAuthResponse> => {
	return await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: location.origin + '/auth/callback',
		},
	});
};

export const signOut = async (
	supabase: SupabaseClient
): Promise<{ error: AuthError | null }> => {
	return await supabase.auth.signOut();
};
