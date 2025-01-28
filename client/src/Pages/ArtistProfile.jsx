import Profile from '@/Components/Profile/Profile.jsx';
import SocialLinks from '@/Components/SocialLinks/SocialLinks.jsx';
import CoverImage from '@/assets/cover.svg'
import AvatarImage from '@/assets/userAvatar.svg'
import ProfileTabs from '@/Components/ProfileTabs/ProfileTabs';


const ArtistProfile = () => {
  const artist = {
    name: 'CryptoArtEnthusiast23',
    avatar: AvatarImage,
    cover: CoverImage,
    bio: '🌐 Exploring the decentralized realm of digital art has been an exhilarating experience for me. I believe in the power of blockchain to revolutionize the art industry, empowering artists and collectors alike. Every NFT I own is not just a piece of art but a unique token representing the future of artistic expression.',
    stats: { nftsSold: 30, totalEarnings: 12.3 },
    socialLinks: [
      { platform: 'Twitter', url: 'https://twitter.com/jane_smith' },
      { platform: 'Instagram', url: 'https://instagram.com/jane_smith' },
    ],
    followers: '23K',
    following: '25',
  };

  const artistTabs = [
    {
      label: "Owned",
      value: "owned",
      content: <div>Artist's Portfolio</div>,
    },
    {
      label: "On sale",
      value: "sale",
      content: <div>Sales Data</div>,
    },
    {
      label: "Collections",
      value: "collection",
      content: <div>Links to artist's social media</div>,
    },
    {
      label: "Created",
      value: "created",
      content: <div>Links to created</div>,
    },
    {
      label: "Activity",
      value: "activity",
      content: <div>Links to activity</div>,
    },
    {
      label: "More",
      value: "more",
      content: <div>Links to more</div>,
    },
  ];


  return (
    <>

      <Profile
        name={artist.name}
        avatar={artist.avatar}
        cover={artist.cover}
        bio={artist.bio}
        stats={artist.stats}

      >
        <SocialLinks
          links={artist.socialLinks}
          followers={artist.followers}
          following={artist.following} />
      </Profile>

      <div className="p-4">
        <ProfileTabs tabs={artistTabs} />
      </div>
    </>
  );
};

export default ArtistProfile;
