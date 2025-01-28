import Profile from '@/Components/Profile/Profile.jsx';
import CoverImage from '@/assets/cover.svg'
import AvatarImage from '@/assets/userAvatar.svg'
import ProfileTabs from '@/Components/ProfileTabs/ProfileTabs';

const UserProfile = () => {
  const user = {
    name: 'CryptoArtEnthusiast23',
    avatar: AvatarImage,
    cover: CoverImage,
    bio: '🌐 Exploring the decentralized realm of digital art has been an exhilarating experience for me. I believe in the power of blockchain to revolutionize the art industry, empowering artists and collectors alike. Every NFT I own is not just a piece of art but a unique token representing the future of artistic expression.',
    stats: { nftsSold: 12, totalEarnings: 4.5 },
  };

  const userTabs = [
    {
      label: "Collected",
      value: "collected",
      content: <div>User Overview Content</div>,
    },
    {
      label: "Offers made",
      value: "offers",
      content: <div>List of NFTs owned by the user</div>,
    },
    {
      label: "Deals",
      value: "deals",
      content: <div>deals Settings</div>,
    },
    {
      label: "Created",
      value: "created",
      content: <div>created Settings</div>,
    },
    {
      label: "Favorited",
      value: "favorited",
      content: <div>favorited Settings</div>,
    },
    {
      label: "Activity",
      value: "activity",
      content: <div>activity Settings</div>,
    },
    {
      label: "More",
      value: "more",
      content: <div>more Settings</div>,
    },
  ];


  return (
    <>
    <Profile
      name={user.name}
      avatar={user.avatar}
      cover={user.cover}
      bio={user.bio}
      stats={user.stats}
    />

     <div className="p-4">
      <ProfileTabs tabs={userTabs} />
    </div>

    </>
  );
};

export default UserProfile;