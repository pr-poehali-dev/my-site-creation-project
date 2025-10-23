import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'study', 'hobbies', 'achievements', 'family'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">Соня</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'about', label: 'Обо мне', icon: 'User' },
                { id: 'study', label: 'Учеба', icon: 'GraduationCap' },
                { id: 'hobbies', label: 'Хобби', icon: 'Heart' },
                { id: 'achievements', label: 'Достижения', icon: 'Trophy' },
                { id: 'family', label: 'Семья', icon: 'Users' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'gradient-pink-purple text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:bg-white/50'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-6"
      >
        <div className="text-center animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full gradient-pink-purple mx-auto flex items-center justify-center text-6xl text-white shadow-2xl animate-scale-in">
              👋
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-slide-up">
            Привет! Я Соня
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            17 лет, ученица 11Б класса школы №51
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="gradient-purple-teal text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Узнать больше
          </button>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
            Обо мне
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full gradient-pink-purple flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Личное</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Меня зовут Соня, мне 17 лет. Я творческая и целеустремленная личность,
                которая всегда открыта новым знаниям и возможностям. Люблю узнавать что-то новое
                и развиваться в разных направлениях.
              </p>
            </Card>

            <Card className="p-8 glass-card hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full gradient-purple-teal flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Цели</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                В этом году я активно готовлюсь к ЕГЭ и планирую успешно сдать экзамены,
                чтобы поступить в хороший вуз. Моя цель - получить качественное образование
                и реализовать свой потенциал.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="study" className="min-h-screen py-20 px-6 bg-white/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
            Учеба
          </h2>
          <Card className="p-8 glass-card mb-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full gradient-pink-purple flex items-center justify-center text-3xl">
                🏫
              </div>
              <div>
                <h3 className="text-3xl font-bold">Школа №51</h3>
                <p className="text-xl text-gray-600">11Б класс</p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { subject: 'Русский язык', icon: '📚', color: 'from-pink-400 to-rose-400' },
              { subject: 'Профильная математика', icon: '🔢', color: 'from-purple-400 to-indigo-400' },
              { subject: 'Английский язык', icon: '🌍', color: 'from-blue-400 to-cyan-400' },
              { subject: 'Обществознание', icon: '👥', color: 'from-teal-400 to-green-400' },
            ].map((exam, index) => (
              <Card
                key={exam.subject}
                className="p-6 glass-card hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exam.color} flex items-center justify-center text-3xl shadow-lg`}>
                    {exam.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{exam.subject}</h4>
                    <p className="text-gray-600">ЕГЭ 2025</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hobbies" className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
            Хобби
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Танцы', icon: '💃', desc: 'Танцую и наслаждаюсь движением' },
              { title: 'Чтение', icon: '📖', desc: 'Люблю погружаться в мир книг' },
              { title: 'Музыка', icon: '🎵', desc: 'Слушаю разные жанры музыки' },
              { title: 'Творчество', icon: '🎨', desc: 'Увлекаюсь творческими проектами' },
              { title: 'Путешествия', icon: '✈️', desc: 'Мечтаю посетить разные страны' },
              { title: 'Фотография', icon: '📷', desc: 'Запечатлеваю яркие моменты' },
              { title: 'Спорт', icon: '⚡', desc: 'Забочусь о своем здоровье' },
            ].map((hobby, index) => (
              <Card
                key={hobby.title}
                className="p-8 glass-card hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {hobby.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{hobby.title}</h3>
                <p className="text-gray-600">{hobby.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen py-20 px-6 bg-white/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
            Достижения
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Отличница',
                desc: 'Хорошие результаты в учебе',
                icon: '⭐',
                color: 'from-yellow-400 to-orange-400',
              },
              {
                title: 'Олимпиады',
                desc: 'Участие в школьных олимпиадах',
                icon: '🏆',
                color: 'from-purple-400 to-pink-400',
              },
              {
                title: 'Активистка',
                desc: 'Участие в школьных мероприятиях',
                icon: '🎯',
                color: 'from-blue-400 to-teal-400',
              },
              {
                title: 'Проекты',
                desc: 'Реализация творческих проектов',
                icon: '💡',
                color: 'from-green-400 to-emerald-400',
              },
            ].map((achievement, index) => (
              <Card
                key={achievement.title}
                className="p-8 glass-card hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-4xl shadow-xl`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="family" className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
            Семья
          </h2>
          <Card className="p-12 glass-card text-center animate-fade-in">
            <div className="w-24 h-24 rounded-full gradient-pink-purple mx-auto mb-8 flex items-center justify-center text-5xl shadow-2xl">
              ❤️
            </div>
            <h3 className="text-3xl font-bold mb-4">Моя опора и поддержка</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Моя семья - это самые важные люди в моей жизни. Они всегда
              поддерживают меня во всех начинаниях, верят в мой успех и помогают
              преодолевать трудности. Благодаря их любви и заботе я становлюсь лучше
              каждый день.
            </p>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-white/50 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 text-lg">
            Создано с 💜 в 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;