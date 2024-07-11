import {useState,useTransition} from 'react';
import TabButton from './TabButton';
import ContactTab from './ContactTab';
import PostsTab from './PostTab';
import AboutTab from './AboutTab';

export default function TabContainer() {
  const [tab, setTaber] = useState("about");

  const [isPending, startTransition] = useTransition();

  function selectTab(next) {
    startTransition(() => {
      setTaber(next)
    })
  }


  return (
      <>
        <TabButton
            isActive={tab === 'about'}
            onClick={() => selectTab('about')}
        >
          About
        </TabButton>
        <TabButton
            isActive={tab === 'posts'}
            onClick={() => selectTab('posts')}
        >
          Posts (slow)
        </TabButton>
        <TabButton
            isActive={tab === 'contact'}
            onClick={() => selectTab('contact')}
        >
          Contact
        </TabButton>
        <hr />
        {tab === 'about' && <AboutTab />}
        {tab === 'posts' && <PostsTab />}
        {tab === 'contact' && <ContactTab />}
      </>
  )

}
