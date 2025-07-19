import React, { useState, useRef, useEffect } from 'react';
import {
  Music,
  Users,
  Heart,
  Search,
  Settings,
  User,
  Play,
  BarChart3,
  Headphones,
  Star,
  Menu,
  X,
  Bell,
  MessageCircle,
  Shield,
  Sunrise,
  Moon,
  Coffee,
  Wind,
  Smile,
  Zap,
  Compass,
  BookOpen,
  Globe,
  Waves,
  CheckCircle,
  Clock,
  ArrowRight,
  Volume2,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Plus,
  Share2,
  Download,
  Bookmark,
  Calendar,
  Award,
  Target,
  TrendingUp,
  Activity,
  Mic,
  Camera,
  Send,
  ThumbsUp,
  MessageSquare,
  Filter,
  SortDesc,
  MoreHorizontal
} from 'lucide-react';
const base = import.meta.env.BASE_URL || '/';
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('sanctuary');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentMood, setCurrentMood] = useState('peaceful');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [showMoodSelector, setShowMoodSelector] = useState(false);
  const [newPost, setNewPost] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const groupScrollRef = useRef(null);






  const menuItems = [
    { id: 'sanctuary', label: 'Santuário', icon: Heart },
    { id: 'immersion', label: 'Imersão Sonora', icon: Headphones },
    { id: 'community', label: 'Comunidade', icon: Users },
    { id: 'journey', label: 'Jornada Emocional', icon: Compass },
    { id: 'support', label: 'Apoio', icon: Shield },
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  const wellbeingStats = [
    { label: 'Sessões de Acolhimento', value: '47', change: '+5 esta semana', icon: Heart },
    { label: 'Momentos de Paz', value: '127h', change: '+12h este mês', icon: Waves },
    { label: 'Conexões Criadas', value: '23', change: '+3 pessoas', icon: Users },
    { label: 'Jornada Emocional', value: '85%', change: 'Progresso positivo', icon: Sunrise },
  ];

  const emotionalStates = [
    {
      id: 'anxious',
      name: 'Ansiedade',
      color: 'from-purple-400 to-indigo-600',
      description: 'Encontre calma e tranquilidade',
      playlists: 12,
      icon: Wind,
      support: 'Respiração guiada disponível'
    },
    {
      id: 'lonely',
      name: 'Solidão',
      color: 'from-blue-400 to-cyan-600',
      description: 'Você não está sozinho',
      playlists: 18,
      icon: Heart,
      support: 'Comunidade ativa'
    },
    {
      id: 'peaceful',
      name: 'Paz Interior',
      color: 'from-green-400 to-emerald-600',
      description: 'Cultive serenidade',
      playlists: 24,
      icon: Waves,
      support: 'Meditação sonora'
    },
    {
      id: 'inspired',
      name: 'Inspiração',
      color: 'from-yellow-400 to-orange-600',
      description: 'Eleve seu espírito',
      playlists: 15,
      icon: Sunrise,
      support: 'Histórias motivacionais'
    },
    {
      id: 'energized',
      name: 'Energia',
      color: 'from-red-400 to-pink-600',
      description: 'Desperte sua vitalidade',
      playlists: 21,
      icon: Zap,
      support: 'Movimento consciente'
    },
    {
      id: 'reflective',
      name: 'Reflexão',
      color: 'from-indigo-400 to-purple-600',
      description: 'Momento de introspecção',
      playlists: 9,
      icon: Moon,
      support: 'Diário emocional'
    }
  ];

  const sanctuaryActivities = [
    {
      title: 'Sessão de Acolhimento Matinal',
      description: 'Começou uma jornada de 20 minutos',
      time: '8:30 hoje',
      mood: 'peaceful',
      completed: true
    },
    {
      title: 'Conexão com Maria S.',
      description: 'Compartilhou momento de gratidão',
      time: 'Ontem',
      mood: 'inspired',
      completed: true
    },
    {
      title: 'Playlist "Abraço Sonoro"',
      description: 'Criada para momentos difíceis',
      time: '2 dias atrás',
      mood: 'anxious',
      completed: false
    },
    {
      title: 'Círculo de Apoio',
      description: 'Participou de conversa em grupo',
      time: '3 dias atrás',
      mood: 'lonely',
      completed: true
    }
  ];

  const supportResources = [
    {
      title: 'Respiração Consciente',
      description: 'Técnicas guiadas para acalmar a mente',
      duration: '5-15 min',
      type: 'Prática',
      icon: Wind,
      available: true
    },
    {
      title: 'Círculo de Escuta',
      description: 'Grupo de apoio com moderação profissional',
      duration: 'Ao vivo',
      type: 'Comunidade',
      icon: Users,
      available: true
    },
    {
      title: 'Diário Sonoro',
      description: 'Registre seus sentimentos através da música',
      duration: 'Livre',
      type: 'Reflexão',
      icon: BookOpen,
      available: true
    },
    {
      title: 'Mentoria Emocional',
      description: 'Conexão com voluntários especializados',
      duration: '30 min',
      type: 'Apoio',
      icon: Heart,
      available: false
    }
  ];

  const groups = {
    'Gospel Soul Sessions': [
      { name: 'Nada me Faltará (Salmos 23)', duration: '2:59', mood: 'peaceful', category: 'Nature Sounds', audioUrl: base + 'audios/salmo_23.mp3' },
      { name: 'À sombra do Altíssimo (Salmos 91)', duration: '3:59', mood: 'anxious', category: 'Meditation', audioUrl: base + 'audios/salmo_91.mp3' },
      { name: 'Como a corsa (Salmos 42)', duration: '2:43', mood: 'lonely', category: 'Therapeutic', audioUrl: base + 'audios/salmo_42.mp3' },
      { name: 'De onde me virá o socorro? (Salmos 121)', duration: '2:57', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_121.mp3' },
      { name: 'Minha Luz (Salmos 27)', duration: '3:51', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_27.mp3' },
      { name: 'Perto dos Quebrantados (Salmos 34)', duration: '3:24', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_34.mp3' },
      { name: 'Minha alma tem sede (Salmos 63)', duration: '2:52', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_63.mp3' },
      { name: 'Das Profundezas (Salmos 130)', duration: '3:22', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_130.mp3' },
      { name: 'Como árvores plantada (Salmos 1)', duration: '3:54', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_1.mp3' },
      { name: 'Desde agora e para sempre (Salmos 121:8)', duration: '3:37', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_121-8.mp3' },
      { name: 'Em paz me deito (Salmos 4:8)', duration: '3:00', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_4-8.mp3' },
      { name: 'Não te esqueças (Salmos 103)', duration: '3:12', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_103.mp3' },
      { name: 'Em tua Presença (Salmos 16:11)', duration: '2:34', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_16-11.mp3' },
      { name: 'Mais que paz (Salmos 29:11)', duration: '3:34', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_29-11.mp3' },
      { name: 'Teus caminhos me sustentam (Salmos 25)', duration: '3:58', mood: 'energized', category: 'Energizing', audioUrl: base + 'audios/salmo_25.mp3' }
    ],

    'Hillsong UNITED': [
      { name: 'Oceans (Where Feet May Fail)', duration: '5:45', category: 'Worship', audioUrl: base + 'audios/oceans.mp3' },
      { name: 'Touch of Heaven', duration: '3:43', category: 'Worship', audioUrl: base + 'audios/touch_of_heaven.mp3' },
      { name: 'What a Beautiful Name', duration: '5:42', category: 'Worship', audioUrl: base + 'audios/what_a_beautiful_name.mp3' },
      { name: 'So Will I (100 Billion X)', duration: '7:00', category: 'Worship', audioUrl: base + 'audios/so_will_i.mp3' },
      { name: 'Another in the Fire', duration: '4:43', category: 'Worship', audioUrl: base + 'audios/another_in_the_fire.mp3' }
    ],

    'Bethel Music': [
      { name: 'It Is Well', duration: '6:30', category: 'Worship', audioUrl: base + 'audios/it_is_well.mp3' },
      { name: 'Goodness of God', duration: '5:00', category: 'Worship', audioUrl: base + 'audios/goodness_of_god.mp3' },
      { name: 'Raise a Hallelujah', duration: '5:00', category: 'Worship', audioUrl: base + 'audios/raise_a_hallelujah.mp3' },
      { name: 'No Longer Slaves', duration: '6:10', category: 'Worship', audioUrl: base + 'audios/no_longer_slaves.mp3' }
    ],

    'Elevation Worship': [
      { name: 'Graves Into Gardens', duration: '7:30', category: 'Worship', audioUrl: base + 'audios/graves_into_gardens.mp3' },
      { name: 'Do It Again', duration: '6:30', category: 'Worship', audioUrl: base + 'audios/do_it_again.mp3' },
      { name: 'O Come to the Altar', duration: '5:30', category: 'Worship', audioUrl: base + 'audios/o_come_to_the_altar.mp3' },
      { name: 'RATTLE!', duration: '6:30', category: 'Worship', audioUrl: base + 'audios/rattle.mp3' }
    ],

    'Passion': [
      { name: 'Even So Come', duration: '6:30', category: 'Worship', audioUrl: base + 'audios/even_so_come.mp3' },
      { name: 'Glorious Day', duration: '4:30', category: 'Worship', audioUrl: base + 'audios/glorious_day.mp3' },
      { name: 'God, You’re So Good', duration: '6:30', category: 'Worship', audioUrl: base + 'audios/god_youre_so_good.mp3' },
      { name: 'Build My Life', duration: '5:58', category: 'Worship', audioUrl: base + 'audios/build_my_life.mp3' }
    ],

    'Jesus Culture': [
      { name: 'Break Every Chain', duration: '8:00', category: 'Worship', audioUrl: base + 'audios/break_every_chain.mp3' },
      { name: 'Fierce', duration: '5:30', category: 'Worship', audioUrl: base + 'audios/fierce.mp3' },
      { name: 'Rooftops', duration: '4:30', category: 'Worship', audioUrl: base + 'audios/rooftops.mp3' },
      { name: 'Your Love Never Fails', duration: '4:30', category: 'Worship', audioUrl: base + 'audios/your_love_never_fails.mp3' }
    ],

    'Casting Crowns': [
      { name: 'Who Am I', duration: '5:00', category: 'Worship', audioUrl: base + 'audios/who_am_i.mp3' },
      { name: 'Praise You In This Storm', duration: '5:00', category: 'Worship', audioUrl: base + 'audios/praise_you_in_this_storm.mp3' },
      { name: 'Voice of Truth', duration: '5:30', category: 'Worship', audioUrl: base + 'audios/voice_of_truth.mp3' },
      { name: 'East to West', duration: '4:30', category: 'Worship', audioUrl: base + 'audios/east_to_west.mp3' }
    ],

    'Pat Barrett': [
      { name: 'Build My Life', duration: '5:58', category: 'Worship', audioUrl: base + 'audios/build_my_life_pat.mp3' },
      { name: 'The Way (New Horizon)', duration: '4:20', category: 'Worship', audioUrl: base + 'audios/the_way.mp3' },
      { name: 'Better', duration: '3:50', category: 'Worship', audioUrl: base + 'audios/better.mp3' },
      { name: 'Canvas and Clay', duration: '4:30', category: 'Worship', audioUrl: base + 'audios/canvas_and_clay.mp3' }
    ]
  };
  const groupNames = Object.keys(groups);

  const [selectedGroup, setSelectedGroup] = useState(groupNames[0]);

  let idCounter = 1;

  const tracks = groups[selectedGroup].map(song => ({
    id: idCounter++,
    name: song.name,
    artist: selectedGroup,
    duration: song.duration,
    mood: song.mood || 'neutral',
    category: song.category,
    audioUrl: song.audioUrl
  }));

  const communityPosts = [
    {
      id: 1,
      user: 'Ana Clara',
      avatar: 'AC',
      time: '2h atrás',
      content: 'Hoje foi um dia difícil, mas encontrei paz na playlist "Abraço Sonoro". Gratidão por esse espaço seguro. 💙',
      likes: 12,
      comments: 5,
      mood: 'peaceful'
    },
    {
      id: 2,
      user: 'João Silva',
      avatar: 'JS',
      time: '4h atrás',
      content: 'Participei do círculo de apoio hoje. É incrível como nos conectamos através da música e da vulnerabilidade.',
      likes: 8,
      comments: 3,
      mood: 'inspired'
    },
    {
      id: 3,
      user: 'Maria Santos',
      avatar: 'MS',
      time: '1d atrás',
      content: 'Criei uma playlist para momentos de ansiedade. Quem mais se identifica com sons da natureza para acalmar? 🌿',
      likes: 15,
      comments: 7,
      mood: 'anxious'
    }
  ];

  const journeyMilestones = [
    {
      title: 'Primeira Sessão',
      description: 'Bem-vindo ao Zimrah!',
      date: 'Há 2 meses',
      completed: true,
      icon: Heart
    },
    {
      title: '7 Dias Consecutivos',
      description: 'Consistência é cura',
      date: 'Há 1 mês',
      completed: true,
      icon: Target
    },
    {
      title: 'Primeira Conexão',
      description: 'Conectou-se com a comunidade',
      date: 'Há 3 semanas',
      completed: true,
      icon: Users
    },
    {
      title: '30 Dias de Jornada',
      description: 'Um mês de crescimento',
      date: 'Há 1 semana',
      completed: true,
      icon: Award
    },
    {
      title: 'Mentor Emocional',
      description: 'Pronto para ajudar outros',
      date: 'Em progresso',
      completed: false,
      icon: Star
    }
  ];

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };


  const togglePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  const addNotification = (message) => {
    setNotifications(prev => [...prev, { id: Date.now(), message, time: new Date() }]);
  };

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      addNotification('Sua mensagem foi compartilhada com a comunidade');
      setNewPost('');
    }
  };

  const EmotionalStateCard = ({ state }) => {
    const Icon = state.icon;
    const isActive = currentMood === state.id;

    return (
      <div
        className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${isActive
          ? `bg-gradient-to-br ${state.color} shadow-lg`
          : 'bg-gray-800/50 hover:bg-gray-700/50'
          }`}
        onClick={() => setCurrentMood(state.id)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-gray-700/50'
              }`}>
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
            </div>
            <div>
              <h4 className={`text-lg font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                {state.name}
              </h4>
              <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                {state.playlists} playlists
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const track = tracks.find(t => t.mood === state.id);
              if (track) playTrack(track);
            }}
            className={`p-2 rounded-full transition-all ${isActive ? 'bg-white/20 hover:bg-white/30' : 'bg-gray-700/50 hover:bg-gray-600/50'
              }`}
          >
            <Play className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
          </button>
        </div>
        <p className={`text-sm mb-3 ${isActive ? 'text-white/90' : 'text-gray-400'}`}>
          {state.description}
        </p>
        <div className={`text-xs px-3 py-1 rounded-full inline-block ${isActive ? 'bg-white/20 text-white' : 'bg-gray-700/50 text-gray-400'
          }`}>
          {state.support}
        </div>
      </div>
    );
  };

  const StatCard = ({ stat }) => {
    const Icon = stat.icon;
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
            <Icon className="w-5 h-5 text-teal-400" />
          </div>
          <span className="text-teal-400 text-sm font-medium">{stat.change}</span>
        </div>
        <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
        <p className="text-gray-400 text-sm">{stat.label}</p>
      </div>
    );
  };

  const SupportResourceCard = ({ resource }) => {
    const Icon = resource.icon;
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 cursor-pointer">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-teal-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold">{resource.title}</h4>
              <span className="text-teal-400 text-xs px-2 py-1 bg-teal-500/20 rounded-full">
                {resource.type}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-3">{resource.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-xs">{resource.duration}</span>
              <button
                onClick={() => {
                  if (resource.available) {
                    addNotification(`Iniciando ${resource.title}...`);
                  } else {
                    addNotification('Recurso em manutenção. Tente novamente mais tarde.');
                  }
                }}
                className={`text-sm font-medium transition-colors ${resource.available
                  ? 'text-teal-400 hover:text-teal-300'
                  : 'text-gray-500 cursor-not-allowed'
                  }`}
                disabled={!resource.available}
              >
                {resource.available ? 'Acessar →' : 'Em breve'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TrackCard = ({ track }) => {
    const isCurrentTrack = currentTrack?.id === track.id;
    return (
      <div className={`bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 ${isCurrentTrack ? 'border-teal-500/50 bg-teal-500/10' : ''
        }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => playTrack(track)}
              className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center hover:bg-teal-500/30 transition-colors"
            >
              <Play className="w-5 h-5 text-teal-400" />
            </button>
            <div>
              <h4 className="text-white font-medium">{track.name}</h4>
              <p className="text-gray-400 text-sm">{track.artist}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">{track.duration}</p>
            <span className="text-xs text-gray-500">{track.category}</span>
          </div>
        </div>
      </div>
    );
  };

  const CommunityPostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes);

    const handleLike = () => {
      setLiked(!liked);
      setLikes(prev => liked ? prev - 1 : prev + 1);
    };

    return (
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
            {post.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-medium">{post.user}</h4>
              <span className="text-gray-500 text-sm">{post.time}</span>
            </div>
            <p className="text-gray-300 mb-4">{post.content}</p>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-colors ${liked ? 'bg-red-500/20 text-red-400' : 'bg-gray-700/50 text-gray-400 hover:text-white'
                  }`}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                <span className="text-sm">{likes}</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Compartilhar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Sidebar = () => (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800/50 z-50 lg:relative lg:z-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">Zimrah</h2>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-white transition-colors lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === item.id
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
  const groupLinks = {
    'Hillsong': 'https://www.hillsong.com',
    'Bethel Music': 'https://www.bethelmusic.com',
    'Elevation Worship': 'https://www.elevationworship.com',
    'Passion': 'https://www.passionmovements.com',
    'Jesus Culture': 'https://www.jesusculture.com',
    'Housefires': 'https://www.housefires.com',
    'The UPPERROOM': 'https://www.theupperroom.com',
    'We The Kingdom': 'https://www.wethekingdom.com',
    'Casting Crowns': 'https://www.castingcrowns.com',
  };

  const groupLogos = {
    'Gospel Soul Sessions': 'sessions.png',
    'Hillsong': 'hillsong.png',
    'Bethel Music': 'bethel.png',
    'Elevation Worship': 'elevation.png',
    'Passion': 'passion.png',
    'Jesus Culture': 'jesusculture.png',
    'Housefires': 'housefires.png',
    'The UPPERROOM': 'upperroom.png',
    'We The Kingdom': 'wethekingdom.png',
    'Casting Crowns': 'castingcrowns.png',
  };

  const groupThemes = {
    'Hillsong': { from: '#1e40af', to: '#4338ca' },
    'Bethel Music': { from: '#7e22ce', to: '#a21caf' },
    'Elevation Worship': { from: '#0f766e', to: '#065f46' },
    'Passion': { from: '#be185d', to: '#9d174d' },
    'Jesus Culture': { from: '#ca8a04', to: '#b45309' },
    'Housefires': { from: '#db2777', to: '#a21caf' },
    'The UPPERROOM': { from: '#0891b2', to: '#0ea5e9' },
    'We The Kingdom': { from: '#84cc16', to: '#16a34a' },
    'Casting Crowns': { from: '#e11d48', to: '#9d174d' },
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'sanctuary':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Bem-vindo ao seu Santuário</h2>
                  <p className="text-teal-200">Um espaço seguro para acolhimento e conexão</p>
                </div>
              </div>
              <p className="text-white/90 mb-6">
                Aqui você encontra apoio emocional através da música, conexões genuínas e um ambiente de cuidado mútuo.
                Sua jornada de bem-estar é única e respeitada.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">✨ Espaço Seguro</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">🤝 Comunidade Acolhedora</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">🎵 Música Terapêutica</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wellbeingStats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Como você está se sentindo hoje?</h3>
              <p className="text-gray-400 mb-6">Escolha seu estado emocional para receber apoio personalizado</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {emotionalStates.map((state) => (
                  <EmotionalStateCard key={state.id} state={state} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">Atividades Recentes</h3>
                <div className="space-y-4">
                  {sanctuaryActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.completed ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}>
                        {activity.completed ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Clock className="w-4 h-4 text-yellow-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{activity.title}</p>
                        <p className="text-gray-400 text-sm">{activity.description}</p>
                        <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">Recursos de Apoio</h3>
                <div className="space-y-4">
                  {supportResources.slice(0, 3).map((resource, index) => (
                    <SupportResourceCard key={index} resource={resource} />
                  ))}
                </div>
                <button
                  onClick={() => setActiveTab('support')}
                  className="w-full mt-4 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors"
                >
                  Ver Todos os Recursos
                </button>
              </div>
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Centro de Apoio Emocional</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportResources.map((resource, index) => (
                  <SupportResourceCard key={index} resource={resource} />
                ))}
              </div>
            </div>
          </div>
        );

      case 'immersion':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                Imersão Sonora Terapêutica
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Escolha um grupo para explorar suas músicas. Cada grupo tem uma identidade visual própria.
              </p>

              <div
                ref={groupScrollRef}
                onWheel={(e) => {
                  if (groupScrollRef.current) {
                    e.preventDefault();
                    groupScrollRef.current.scrollBy({
                      left: e.deltaY * 3,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2 no-scrollbar cursor-grab snap-x snap-mandatory"
                style={{ scrollBehavior: 'smooth' }}
              >
                {groupNames.map((group) => (
                  <button
                    key={group}
                    onClick={() => setSelectedGroup(group)}
                    className={`flex-shrink-0 w-64 rounded-xl shadow-lg text-white p-4 flex flex-col justify-between transition-all duration-300 transform snap-start ${selectedGroup === group
                      ? 'scale-105 shadow-xl'
                      : 'hover:scale-105 hover:shadow-xl opacity-80'
                      }`}
                    style={{
                      background: `linear-gradient(135deg, ${groupThemes[group]?.from || '#4b5563'
                        }, ${groupThemes[group]?.to || '#1f2937'})`,
                    }}
                  >
                    <img
                      src={`${base}logos/${groupLogos[group] || 'default.png'}`}
                      alt={group}
                      className="h-12 mx-auto mb-4"
                    />
                    <h4 className="text-xl font-semibold text-center">{group}</h4>
                    <a
                      href={groupLinks[group] || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center mt-2 text-sm underline text-white/80 hover:text-white"
                    >
                      {(groupLinks[group] &&
                        new URL(groupLinks[group]).hostname.replace('www.', '')) ||
                        'site indisponível'}
                    </a>
                  </button>
                ))}
              </div>

              <div
                className="mt-8 space-y-4 overflow-y-auto max-h-[400px] pr-2 no-scrollbar scroll-smooth"
              >
                {tracks.filter(track => track.artist === selectedGroup).length > 0 ? (
                  tracks
                    .filter(track => track.artist === selectedGroup)
                    .map(track => (
                      <TrackCard key={track.id} track={track} />
                    ))
                ) : (
                  <div className="text-gray-500 text-center">
                    Nenhuma música disponível para este grupo.
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'community':
        return (
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Comunidade de Apoio</h3>

              <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                    Eu
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      placeholder="Compartilhe seus sentimentos, conquistas ou momentos de gratidão..."
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      rows="3"
                    />
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Camera className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Mic className="w-5 h-5" />
                        </button>
                      </div>
                      <button
                        onClick={handlePostSubmit}
                        className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50"
                        disabled={!newPost.trim()}
                      >
                        Compartilhar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {communityPosts.map((post) => (
                  <CommunityPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        );

      case 'journey':
        return (
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Sua Jornada Emocional</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-white">Marcos da Jornada</h4>
                  {journeyMilestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/50">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-green-500/20' : 'bg-gray-700/50'}`}>
                          <Icon className={`w-5 h-5 ${milestone.completed ? 'text-green-400' : 'text-gray-400'}`} />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-white font-medium">{milestone.title}</h5>
                          <p className="text-gray-400 text-sm">{milestone.description}</p>
                          <p className="text-gray-500 text-xs mt-1">{milestone.date}</p>
                        </div>
                        {milestone.completed && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">Progresso Semanal</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Sessões Concluídas</span>
                        <span className="text-white">12/15</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Conexões Feitas</span>
                        <span className="text-white">8/10</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Bem-estar Geral</span>
                        <span className="text-white">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );


      case 'profile':
        return (
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Seu Perfil</h3>

              <div className="flex items-center space-x-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  U
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Usuário</h4>
                  <p className="text-gray-400">Membro desde Janeiro 2024</p>
                  <p className="text-teal-400 text-sm">Nível: Buscador de Paz</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <Heart className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">47</p>
                  <p className="text-gray-400 text-sm">Sessões Concluídas</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">23</p>
                  <p className="text-gray-400 text-sm">Conexões Feitas</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">4</p>
                  <p className="text-gray-400 text-sm">Marcos Alcançados</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Configurações</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Preferências de Apoio</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-5 h-5 text-teal-500" defaultChecked />
                      <span className="text-gray-300">Receber notificações de apoio</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-5 h-5 text-teal-500" defaultChecked />
                      <span className="text-gray-300">Participar de círculos de apoio</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-5 h-5 text-teal-500" />
                      <span className="text-gray-300">Compartilhar progresso com mentores</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Privacidade</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-5 h-5 text-teal-500" defaultChecked />
                      <span className="text-gray-300">Perfil visível na comunidade</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-5 h-5 text-teal-500" />
                      <span className="text-gray-300">Permitir mensagens diretas</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Em Desenvolvimento</h3>
              <p className="text-gray-400">Esta seção estará disponível em breve</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className="hidden lg:block">
        <div className="fixed left-0 top-0 h-full w-64 bg-gray-900/70 backdrop-blur-md border-r border-gray-800/50 shadow-inner">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Zimrah
              </h2>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${activeTab === item.id
                        ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && <Sidebar />}

      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-gray-900/50 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-white transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar apoio, playlists, comunidade..."
                  className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-gray-400 hover:text-white transition-colors"
              >
                <Bell className="w-5 h-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white">
                    {notifications.length}
                  </span>
                )}
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {showNotifications && (
            <div className="absolute right-6 top-16 w-80 bg-gray-800 rounded-xl shadow-xl border border-gray-700 p-4 z-50 animate-fade-in">
              <h4 className="text-white font-medium mb-3">Notificações</h4>
              {notifications.length === 0 ? (
                <p className="text-gray-400 text-sm">Nenhuma notificação</p>
              ) : (
                <div className="space-y-2">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-3 bg-gray-700/50 rounded-lg">
                      <p className="text-white text-sm">{notification.message}</p>
                      <p className="text-gray-400 text-xs mt-1">
                        {notification.time.toLocaleTimeString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </header>

        {currentTrack && (
          <audio
            ref={audioRef}
            src={currentTrack.audioUrl}
            onEnded={() => setIsPlaying(false)}
          />
        )}

        {/* Music Player */}
        {currentTrack && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50 p-4 z-40">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{currentTrack.name}</h4>
                  <p className="text-gray-400 text-sm">{currentTrack.artist}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="p-3 bg-teal-500 hover:bg-teal-600 rounded-full transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" />
                  )}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Volume2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentTrack(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        <main  className={`flex-1 p-6 ${currentTrack ? 'pb-24' : ''}`}>
          <div key={activeTab} className="animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );

}
