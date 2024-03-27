import { redirectToPath } from '@/utils/auth-helpers/server';
import { getSupabaseServerClient } from '@/utils/supabase/server';

export default async function Layout({ children }: PropsWithChildren) {
  const supabase = getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirectToPath('/signin');
  }

  return <>{children}</>;
}