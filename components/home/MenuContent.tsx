import React from 'react'
import FlowingMenu from '../reactbits/FlowingMenu';

const MenuContent = () => {
  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
  ];

  return (
    <div>Works



      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={demoItems}
          speed={15}
          textColor="#000000"
          bgColor="#ffffff"
          marqueeBgColor="#000000"
          marqueeTextColor="#ffffff"
          borderColor="#000000"
        />
      </div>

    </div>
  )
}

export default MenuContent