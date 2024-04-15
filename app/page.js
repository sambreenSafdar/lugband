import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto pt-10">
      <h2 className="text-xl">Routes</h2>
      <div className="flex flex-col">
        <Link href="/auth/signup" className="text-green-500">
          Signup
        </Link>
        <Link href="/auth/signin" className="text-green-500">
          Signin
        </Link>
        <Link href="/auth/email-confirmation" className="text-green-500">
          Email Confirmation
        </Link>
        <Link href="/account-management" className="text-green-500">
          Account Management
        </Link>
        <Link href="/customers" className="text-green-500">
          Customers
        </Link>
        <Link href="/admin/account" className="text-green-500">
          Admin Account
        </Link>
        <Link href="/financial-platform" className="text-green-500">
          Financial Platform
        </Link>
        <Link href="/lugband" className="text-green-500">
          Lugband
        </Link>
      </div>
    </div>
  );
}
