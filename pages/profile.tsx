import Head from "next/head";
import { getSession, signOut } from "next-auth/react";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import type { User } from "next-auth";
import { useState } from "react";
import {
  ProfileHeader,
  PersonalInfoCard,
  AccountStatsCard,
  QuickActionsCard,
} from "@/components/profile";
import type { EditableUserInfo } from "@/components/profile";

type Props = { data: User };

const ProfilePage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState<EditableUserInfo>({
    name: data?.name || "",
    email: data?.email || "",
  });

  const handleSave = () => {
    // TODO: Persist changes to your backend
    setIsEditing(false);
  };

  return (
    <>
      <Head>
        <title>Profile - {data?.name}</title>
        <meta name="description" content="User profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {data && (
            <div className="max-w-4xl mx-auto">
              <ProfileHeader
                user={data}
                isEditing={isEditing}
                onToggleEdit={() => setIsEditing((v) => !v)}
                onSignOut={() => signOut()}
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <PersonalInfoCard
                    isEditing={isEditing}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    onSave={handleSave}
                  />
                </div>

                <div className="space-y-6">
                  <AccountStatsCard orders={12} wishlist={5} reviews={8} />
                  <QuickActionsCard
                    onViewOrders={() => console.log("View Orders")}
                    onViewWishlist={() => console.log("Wishlist")}
                    onOpenSettings={() => console.log("Settings")}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination:
          process.env.NODE_ENV
            ? "/api/auth/signin?callbackUrl=https://squarenext.vercel.app/"
            : "/api/auth/signin?callbackUrl=http://localhost:3000/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session.user ? (session.user as User) : (null as any),
    },
  };
};
