import { redirect } from 'next/navigation';

export default function ReviewRedirectPage() {
  redirect('/review/write');
}
