import { Link } from "react-router-dom";
import Facebook from '@/assets/Facebook.svg'
import Twitter from '@/assets/Twitter.svg'
import Insta from '@/assets/Insta.svg'
import { Share } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
import { Button } from "../ui/button";



const SocialLinks = ({ links, followers, following }) => (
    <div className="flex flex-col gap-4  m-8">
        <div>
            <div className="flex flex-row justify-between">
                <p>Followers</p>
                <p className=" font-bold">{followers}</p>
            </div>
            <div className="flex flex-row justify-between">
                <p>Following</p>
                <p className=" font-bold">{following}</p>
            </div>
        </div>

        <div className="flex flex-row gap-10 justify-between ">
            <div className="flex flex-row gap-4 justify-between">
                <Link><img src={Twitter} className="w-5 h-5" /></Link>
                <Link><img src={Insta} className="w-5 h-5" /></Link>
                <Link><img src={Facebook} className="w-5 h-5" /></Link>
            </div>
            <div className="flex flex-row gap-4 justify-between">
                <Share size={20} />
                <Ellipsis size={20} />
            </div>

        </div>
        <div>
                <Button className='!bg-primary !text-white rounded-full w-full'>Follow</Button>
            </div>
        {/* {links.map(({ platform, url }, index) => (
            <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                {platform}
            </a>
        ))} */}
    </div>
);

export default SocialLinks;
