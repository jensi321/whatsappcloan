export const ChatList = [
  {
    id: 1,
    name: 'John Doe',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastMessage: 'Hey, how are you?',
    timestamp: '2024-11-23T10:45:00', // Combined date and time
    isRead: true
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastMessage: 'Are we still meeting tomorrow?',
    timestamp: '2024-11-22T09:30:00', // Combined date and time
    isRead: false,
    unreadmsg: 1 // Assuming this is the first unread message
  },
  {
    id: 3,
    name: 'Michael Brown',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    lastMessage: 'Let me know when you’re free.',
    timestamp: '2024-11-21T20:15:00', // Combined date and time
    isRead: true
  },
  {
    id: 4,
    name: 'Emily Davis',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
    lastMessage: 'Got it, thanks!',
    timestamp: '2024-11-21T18:45:00', // Combined date and time
    isRead: true
  },
  {
    id: 5,
    name: 'Chris Johnson',
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
    lastMessage: 'Can you send me the file?',
    timestamp: '2024-11-21T16:30:00', // Combined date and time
    isRead: false,
    unreadmsg: 1 // Assuming this is the first unread message
  },
  {
    id: 6,
    name: 'Sarah Wilson',
    profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
    lastMessage: 'I’ll call you in 10 minutes.',
    timestamp: '2024-11-20T14:15:00', // Combined date and time
    isRead: true
  },
  {
    id: 7,
    name: 'David Martinez',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
    lastMessage: 'See you later!',
    timestamp: '2024-11-20T11:50:00', // Combined date and time
    isRead: false,
    unreadmsg: 1 // Assuming this is the first unread message
  },
  {
    id: 8,
    name: 'Emma Garcia',
    profilePic: 'https://randomuser.me/api/portraits/women/5.jpg',
    lastMessage: 'Where are you now?',
    timestamp: '2024-11-19T09:05:00', // Combined date and time
    isRead: true
  },
  {
    id: 9,
    name: 'Daniel Rodriguez',
    profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
    lastMessage: 'That sounds great!',
    timestamp: '2024-11-19T07:45:00', // Combined date and time
    isRead: true
  },
  {
    id: 10,
    name: 'Sophia Hernandez',
    profilePic: 'https://randomuser.me/api/portraits/women/6.jpg',
    lastMessage: 'Can we reschedule our meeting?',
    timestamp: '2024-11-18T22:20:00', // Combined date and time
    isRead: false,
    unreadmsg: 2 // Updated to reflect 2 unread messages
  },
  {
    id: 11,
    name: 'Matthew Lee',
    profilePic: 'https://randomuser.me/api/portraits/men/6.jpg',
    lastMessage: 'Thank you for your help!',
    timestamp: '2024-11-18T20:35:00', // Combined date and time
    isRead: true
  },
  {
    id: 12,
    name: 'Olivia Moore',
    profilePic: 'https://randomuser.me/api/portraits/women/7.jpg',
    lastMessage: 'I’ll check and get back to you.',
    timestamp: '2024-11-17T18:15:00', // Combined date and time
    isRead: true
  },
  {
    id: 13,
    name: 'Lucas Anderson',
    profilePic: 'https://randomuser.me/api/portraits/men/7.jpg',
    lastMessage: 'Let’s catch up soon!',
    timestamp: '2024-11-17T15:25:00', // Combined date and time
    isRead: false,
    unreadmsg: 1 // Assuming this is the first unread message
  },
  {
    id: 14,
    name: 'Isabella Taylor',
    profilePic: 'https://randomuser.me/api/portraits/women/8.jpg',
    lastMessage: 'Sure, no problem.',
    timestamp: '2024-11-16T13:50:00', // Combined date and time
    isRead: true
  },
  {
    id: 15,
    name: 'Ethan Thomas',
    profilePic: 'https://randomuser.me/api/portraits/men/8.jpg',
    lastMessage: 'I’m on my way.',
    timestamp: '2024-11-16T11:10:00', // Combined date and time
    isRead: false,
    unreadmsg: 1 // Assuming this is the first unread message
  },
];


// channelsData.js
export const channelsList = [
  {
    id: 1,
    name: 'General',
    lastMessage: 'Hello everyone!',
    timestamp: '2024-11-22T10:00:00Z',
    profilePic: 'https://picsum.photos/150/150?random=6',
    unreadCount: 2, // Number of unread messages
    isRead: false,   // Message read status
  },
  {
    id: 2,
    name: 'Development',
    lastMessage: 'We need to finalize the project specs.',
    timestamp: '2024-11-22T09:30:00Z',
    profilePic: 'https://picsum.photos/150/150?random=7',
    isRead: true,    // Message read status
  },
  {
    id: 3,
    name: 'Design',
    lastMessage: 'The new design looks great!',
    timestamp: '2024-11-21T08:15:00Z',
    profilePic: 'https://picsum.photos/150/150?random=8',
    unreadCount: 1, // Number of unread messages
    isRead: false,   // Message read status
  },
  {
    id: 4,
    name: 'Marketing',
    lastMessage: 'Don’t forget the meeting tomorrow!',
    timestamp: '2024-11-21T06:45:00Z',
    profilePic: 'https://picsum.photos/150/150?random=9',
    unreadCount: 3, // Number of unread messages
    isRead: false,   // Message read status
  },
  // Add more channels as needed
];
export const FindChannelList = [
  {
    "id": 1,
    "name": "Tech News",
    "description": "Latest updates and news in technology.",
    "category": "Technology",
    "subscribers": "1.5K",
    "image": "https://picsum.photos/150/150?random=1"
  },
  {
    "id": 2,
    "name": "Fitness Tips",
    "description": "Daily fitness tips and workout routines.",
    "category": "Health",
    "subscribers": "800",
    "image": "https://picsum.photos/150/150?random=2"
  },
  {
    "id": 3,
    "name": "Cooking Recipes",
    "description": "Delicious recipes and cooking tips.",
    "category": "Food",
    "subscribers": "1.2K",
    "image": "https://picsum.photos/150/150?random=3"
  },
  {
    "id": 4,
    "name": "Travel Adventures",
    "description": "Explore the world through travel stories.",
    "category": "Travel",
    "subscribers": "600",
    "image": "https://picsum.photos/150/150?random=4"
  },
  {
    "id": 5,
    "name": "Global News",
    "description": "Breaking news from around the world.",
    "category": "News",
    "subscribers": "2.4M",
    "image": "https://picsum.photos/150/150?random=5"
  },
  {
    "id": 6,
    "name": "Gadget Reviews",
    "description": "In-depth reviews of the latest gadgets and tech.",
    "category": "Technology",
    "subscribers": "900",
    "image": "https://picsum.photos/150/150?random=6"
  },
  {
    "id": 7,
    "name": "Healthy Eating",
    "description": "Tips and recipes for a healthy lifestyle.",
    "category": "Health",
    "subscribers": "1.1K",
    "image": "https://picsum.photos/150/150?random=7"
  },
  {
    "id": 8,
    "name": "Baking Basics",
    "description": "Learn the art of baking with easy recipes.",
    "category": "Food",
    "subscribers": "750",
    "image": "https://picsum.photos/150/150?random=8"
  },
  {
    "id": 9,
    "name": "Adventure Travel",
    "description": "Thrilling travel experiences and tips.",
    "category": "Travel",
    "subscribers": "1.3K",
    "image": "https://picsum.photos/150/150?random=9"
  },
  {
    "id": 10,
    "name": "World Politics",
    "description": "Analysis and updates on global political events.",
    "category": "News",
    "subscribers": "1.8M",
    "image": "https://picsum.photos/150/150?random=10"
  },
  {
    "id": 11,
    "name": "AI Innovations",
    "description": "Latest advancements in artificial intelligence.",
    "category": "Technology",
    "subscribers": "2K",
    "image": "https://picsum.photos/150/150?random=11"
  },
  {
    "id": 12,
    "name": "Yoga for Beginners",
    "description": "Guided yoga sessions for all levels.",
    "category": "Health",
    "subscribers": "1.5K",
    "image": "https://picsum.photos/150/150?random=12"
  },
  {
    "id": 13,
    "name": "Vegan Cooking",
    "description": "Delicious vegan recipes for everyone.",
    "category": "Food",
    "subscribers": "1K",
    "image": "https://picsum.photos/150/150?random=13"
  },
  {
    "id": 14,
    "name": "Cultural Travel",
    "description": "Discover cultures through travel.",
    "category": "Travel",
    "subscribers": "850",
    "image": "https://picsum.photos/150/150?random=14"
  },
  {
    "id": 15,
    "name": "Tech Reviews",
    "description": "Comprehensive reviews of the latest tech products.",
    "category": "Technology",
    "subscribers": "1.2K",
    "image": "https://picsum.photos/150/150?random=15"
  },
  {
    "id": 16,
    "name": "Mental Health Matters",
    "description": "Discussions and tips on mental well-being.",
    "category": "Health",
    "subscribers": "1.8K",
    "image": "https://picsum.photos/150/150?random=16"
  },
  {
    "id": 17,
    "name": "Quick Meals",
    "description": "Fast and easy meal ideas for busy people.",
    "category": "Food",
    "subscribers": "1.4K",
    "image": "https://picsum.photos/150/150?random=17"
  },
  {
    "id": 18,
    "name": "Nature Escapes",
    "description": "Explore the beauty of nature through travel.",
    "category": "Travel",
    "subscribers": "700",
    "image": "https://picsum.photos/150/150?random=18"
  },
  {
    "id": 19,
    "name": "Sports Highlights",
    "description": "Catch up on the latest sports news and highlights.",
    "category": "News",
    "subscribers": "2M",
    "image": "https://picsum.photos/150/150?random=19"
  },
  {
    "id": 20,
    "name": "Future Tech",
    "description": "Exploring the future of technology and innovation.",
    "category": "Technology",
    "subscribers": "1.6K",
    "image": "https://picsum.photos/150/150?random=20"
  }
]


export const statusList = [
  {
    id: 1,
    name: 'John Doe',
    profilePic: 'https://picsum.photos/150/150?random=10',
    statusMessage: 'Having a great day!',
    timestamp: '2024-11-22T10:00:00Z',
    viewed: false
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePic: 'https://picsum.photos/150/150?random=11',
    statusMessage: 'Just finished a workout!',
    timestamp: '2024-11-22T09:30:00Z',
    viewed: true
  },
  {
    id: 3,
    name: 'Michael Brown',
    profilePic: 'https://picsum.photos/150/150?random=12',
    statusMessage: 'Exploring the city!',
    timestamp: '2024-11-21T08:15:00Z',
    viewed: false
  },
  {
    id: 4,
    name: 'Emily Davis',
    profilePic: 'https://picsum.photos/150/150?random=13',
    statusMessage: 'Coffee time ☕',
    timestamp: '2024-11-21T06:45:00Z',
    viewed: true
  },
  {
    id: 5,
    name: 'Chris Johnson',
    profilePic: 'https://picsum.photos/150/150?random=14',
    statusMessage: 'Can’t wait for the weekend!',
    timestamp: '2024-11-21T04:30:00Z',
    viewed: false
  },
  {
    id: 6,
    name: 'Sarah Wilson',
    profilePic: 'https://picsum.photos/150/150?random=15',
    statusMessage: 'Working on a new project.',
    timestamp: '2024-11-20T02:15:00Z',
    viewed: true
  },
  {
    id: 7,
    name: 'David Martinez',
    profilePic: 'https://picsum.photos/150/150?random=16',
    statusMessage: 'See you later!',
    timestamp: '2024-11-20T11:50:00Z',
    viewed: false
  },
  {
    id: 8,
    name: 'Emma Garcia',
    profilePic: 'https://picsum.photos/150/150?random=17',
    statusMessage: 'Where are you now?',
    timestamp: '2024-11-19T09:05:00Z',
    viewed: true
  },
  {
    id: 9,
    name: 'Daniel Rodriguez',
    profilePic: 'https://picsum.photos/150/150?random=18',
    statusMessage: 'That sounds great!',
    timestamp: '2024-11-19T07:45:00Z',
    viewed: true
  },
  {
    id: 10,
    name: 'Sophia Hernandez',
    profilePic: 'https://picsum.photos/150/150?random=19',
    statusMessage: 'Can we reschedule our meeting?',
    timestamp: '2024-11-18T10:20:00Z',
    viewed: false
  },
  {
    id: 11,
    name: 'Matthew Lee',
    profilePic: 'https://picsum.photos/150/150?random=20',
    statusMessage: 'Thank you for your help!',
    timestamp: '2024-11-18T08:35:00Z',
    viewed: true
  },
  {
    id: 12,
    name: 'Olivia Moore',
    profilePic: 'https://picsum.photos/150/150?random=21',
    statusMessage: 'I’ll check and get back to you.',
    timestamp: '2024-11-17T06:15:00Z',
    viewed: true
  },
  {
    id: 13,
    name: 'Lucas Anderson',
    profilePic: 'https://picsum.photos/150/150?random=22',
    statusMessage: 'Let’s catch up soon!',
    timestamp: '2024-11-17T03:25:00Z',
    viewed: false
  },
  {
    id: 14,
    name: 'Isabella Taylor',
    profilePic: 'https://picsum.photos/150/150?random=23',
    statusMessage: 'Sure, no problem.',
    timestamp: '2024-11-16T01:50:00Z',
    viewed: true
  },
  {
    id: 15,
    name: 'Ethan Thomas',
    profilePic: 'https://picsum.photos/150/150?random=24',
    statusMessage: 'I’m on my way.',
    timestamp: '2024-11-16T11:10:00Z',
    viewed: false
  },
];


export const community = [
  {
    "id": 1,
    "name": "Tech Innovators",
    "image": "https://picsum.photos/150/150?random=20",
    "members": 150,
    "lastmsg": "Excited about the new AI trends!",
    "timestamp": "2023-10-01T10:30:00Z"
  },
  {
    "id": 2,
    "name": "Health & Wellness",
    "image": "https://picsum.photos/150/150?random=21",
    "members": 200,
    "lastmsg": "Let's share our favorite healthy recipes!",
    "timestamp": "2023-10-02T14:15:00Z"
  },
  {
    "id": 3,
    "name": "Travel Enthusiasts",
    "image": "https://picsum.photos/150/150?random=22",
    "members": 300,
    "lastmsg": "Just returned from an amazing trip to Japan!",
    "timestamp": "2023-10-03T09:45:00Z"
  },
  {
    "id": 4,
    "name": "Food Lovers",
    "image": "https://picsum.photos/150/150?random=23",
    "members": 250,
    "lastmsg": "Who wants to try a new recipe this weekend?",
    "timestamp": "2023-10-04T16:00:00Z"
  },
  {
    "id": 5,
    "name": "Book Club",
    "image": "https://picsum.photos/150/150?random=24",
    "members": 180,
    "lastmsg": "What book should we read next?",
    "timestamp": "2023-10-05T11:20:00Z"
  }
];


export const userList = [
  {
    "id": 1,
    "name": "John Doe",
    "avatar": "https://picsum.photos/50/50?random=1",
    "status": "Online",
    "description": "Available"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "avatar": "https://picsum.photos/50/50?random=2",
    "status": "Last seen at 12:15",
    "description": "Hey there! I'm using WhatsApp"
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "avatar": "https://picsum.photos/50/50?random=3",
    "status": "Busy",
    "description": "Available"
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "avatar": "https://picsum.photos/50/50?random=4",
    "status": "Offline",
    "description": "Available"
  },
  {
    "id": 5,
    "name": "Charlie Green",
    "avatar": "https://picsum.photos/50/50?random=5",
    "status": "Online",
    "description": "Hey there! I'm using WhatsApp"
  },
  {
    "id": 6,
    "name": "Diana Prince",
    "avatar": "https://picsum.photos/50/50?random=6",
    "status": "Online",
    "description": "Available"
  },
  {
    "id": 7,
    "name": "Ethan Hunt",
    "avatar": "https://picsum.photos/50/50?random=7",
    "status": "Last seen at 10:45",
    "description": "Busy with work"
  },
  {
    "id": 8,
    "name": "Fiona Apple",
    "avatar": "https://picsum.photos/50/50?random=8",
    "status": "Online",
    "description": "Available"
  },
  {
    "id": 9,
    "name": "George Clooney",
    "avatar": "https://picsum.photos/50/50?random=9",
    "status": "Away",
    "description": "In a meeting"
  },
  {
    "id": 10,
    "name": "Hannah Montana",
    "avatar": "https://picsum.photos/50/50?random=10",
    "status": "Offline",
    "description": "Available"
  },
  {
    "id": 11,
    "name": "Ian Malcolm",
    "avatar": "https://picsum.photos/50/50?random=11",
    "status": "Online",
    "description": "Hey there! I'm using WhatsApp"
  },
  {
    "id": 12,
    "name": "Jessica Jones",
    "avatar": "https://picsum.photos/50/50?random=12",
    "status": "Last seen at 14:00",
    "description": "Available"
  },
  {
    "id": 13,
    "name": "Kevin Bacon",
    "avatar": "https://picsum.photos/50/50?random=13",
    "status": "Busy",
    "description": "Available"
  },
  {
    "id": 14,
    "name": "Lucy Liu",
    "avatar": "https://picsum.photos/50/50?random=14",
    "status": "Online",
    "description": "Available"
  },
  {
    "id": 15,
    "name": "Michael Scott",
    "avatar": "https://picsum.photos/50/50?random=15",
    "status": "Away",
    "description": "Taking a break"
  },
  {
    "id": 16,
    "name": "Natalie Portman",
    "avatar": "https://picsum.photos/50/50?random=16",
    "status": "Online",
    "description": "Hey there! I'm using WhatsApp"
  },
  {
    "id": 17,
    "name": "Oscar Isaac",
    "avatar": "https://picsum.photos/50/50?random=17",
    "status": "Last seen at 13:30",
    "description": "Busy with family"
  },
  {
    "id": 18,
    "name": "Penelope Cruz",
    "avatar": "https://picsum.photos/50/50?random=18",
    "status": "Online",
    "description": "Available"
  },
  {
    "id": 19,
    "name": "Quentin Tarantino",
    "avatar": "https://picsum.photos/50/50?random=19",
    "status": "Busy",
    "description": "Filming a new project"
  },
  {
    "id": 20,
    "name": "Rachel Green",
    "avatar": "https://picsum.photos/50/50?random=20",
    "status": "Offline",
    "description": "Available"
  }
];


export const Footericons = [
  {
    img: 'assets/Images/Close-grey.svg',
    class: 'hidden'
  },
  {
    img: 'assets/Images/Emoji.svg',
    class: 'block'
  },
  {
    img: 'assets/Images/gif.svg',
    class: 'hidden'
  },
  {
    img: 'assets/Images/stiker.svg',
    class: 'hidden'
  },


]