const localQuotes = [
    {
        quote: 'Nothing can make our life, or the lives of other people, more beautiful than perpetual kindness.',
        author: 'Tolstoy'
    },
    {
        quote: 'It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.',
        author: 'Marcus Aurelius'
    },
    {
        quote: 'He who has a why to live can bear almost any how.',
        author: 'Friedrich Nietzsche'
    },
    {
        quote: 'Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.',
        author: 'Mark Twain'
    },
    {
        quote: 'Relationships don\'t work because the stars aligned for 2 people.They work when 2 people make the conscious decision to grow, change, and evolve together into a new, terrifying, two-headed, final boss form.',
        author: 'Unknown'
    },
    {
        quote: 'Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer the negative elements in your life, don’t sit at home and think about it. Go out and get busy!',
        author: 'Dale Carnegie'
    },
    {
        quote: 'There’s a desire to celebrate our \"authentic\" self.  But perhaps our considered self, the one that shows up when we’re doing our best to be consistent, generous and professional – that’s our authentic self. And the voice that slips out when we’re tired, stressed or busy is simply an incomplete and lesser version of who we actually are.  We’re the sum total of the interactions we choose to create and the changes we contribute.',
        author: 'Seth Godin'
    },
    {
        quote: 'I don\'t trust people who don’t love themselves and tell me ‘I love you.’ … There is an African saying which is: \"Be careful when a naked person offers you a shirt.\"',
        author: 'Maya Angelou'
    },
    {
        quote: 'Any person capable of angering you becomes your master. They can anger you only when you permit yourself to be disturbed by them.', author: 'Epictetus'
    },
    {
        quote: 'So often loneliness comes from being out of touch with parts of oneself. We go searching for those parts in other people, but there’s a difference between feeling separate from others and separate from oneself.',
        author: 'Diane Ackerman'
    },
    {
        quote: 'Hope is not something that you have. Hope is something that you create, with your actions. Hope is something you have to manifest into the world, and once one person has hope, it can be contagious.',
        author: 'Alexandra Ocasio-Cortez'
    },
    {
        quote: 'Animals will help man become human, if we’ll ever survive.',
        author: 'Unknown'
    },
    {
        quote: 'Success is walking from failure to failure with no loss of enthusiasm.',
        author: 'Winston Churchill'
    },
    {
        quote: 'If someone cares enough to dislike our work, the best response is, \"thank you\". Thank you for taking the time to consider it, thank you for caring enough to let me know.',
        author: 'Seth Godin'
    },
    {
        quote: 'The impediment to action advances action. What stands in the way becomes the way.',
        author: 'Marcus Aurelius'
    },
    {
        quote: 'Make your interests gradually wider and more impersonal, until bit by bit the walls of the ego recede, and your life becomes increasingly merged in the universal life.',
        author: 'Bertrand Russell'
    },
    {
        quote: 'Stay away from negative people. They have a problem for every solution.',
        author: 'Albert Einstein'
    },
    {
        quote: 'We are all warriors. Each of us struggles every day to define and defend our sense of purpose and integrity, to justify our existence on the planet and to understand, if only within our own hearts, who we are and what we believe in.',
        author: 'Steven Pressfield, Warrior Ethos'
    },
    {
        quote: 'When things get tough, this is what you should do - make good art. I\'m serious, husband runs off with a politician - make good art, leg crushed and then eaten by a mutated boa constrictor - make good art, IRS on your trail - make good art, cat exploded - make good art. Someone on the internet thinks what you\'re doing is stupid or evil or it\'s all been done before - make good art. Do what only you can do best - make good art. Make it on the bad days, and make it on the good days too - make good art.',
        author: 'Neil Gaiman (commencment speech 2012)'
    },
    {
        quote: 'Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it’s just not that good. It’s trying to be good, it has potential, but it’s not. But your taste, the thing that got you into the game, is still killer. And your taste is why your work disappoints you. A lot of people never get past this phase, they quit. Most people I know who do interesting, creative work went through years of this. We know our work doesn’t have this special thing that we want it to have. We all go through this. And if you are just starting out or you are still in this phase, you gotta know its normal and the most important thing you can do is do a lot of work. Put yourself on a deadline so that every week you will finish one story. It is only by going through a volume of work that you will close that gap, and your work will be as good as your ambitions. And I took longer to figure out how to do this than anyone I’ve ever met. It’s gonna take awhile. It’s normal to take awhile. You’ve just gotta fight your way through.',
        author: 'Ira Glass'
    },
    {
        quote: 'The ability to observe without evaluating is the highest form of intelligence.',
        author: 'Jiddu Krishnamurti'
    },
    {
        quote: 'The night is darkest just before the dawn',
        author: 'Buddhist saying'
    },
    {
        quote: 'The reasonable unreasonable man progresses / adapts in harmony with the world.',
        author: 'Jason Chang'
    },
    {
        quote: 'The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.',
        author: 'George Bernard Shaw'
    },
    {
        quote: 'When asked what surprised him about humanity the most, the Dalai Lama replied: “Man. Because he sacrifices his health in order to make money. Then he sacrifices money to recuperate his health. And then he is so anxious about the future that he does not enjoy the present\; the result being that he does not live in the present or the future\; he lives as if he is never going to die, and then dies having never really lived.”', author: 'Dalai Lama'
    },
    {
        quote: 'One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating',
        author: 'Luciano Pavarotti'
    },
    {
        quote: 'The magic of escapist fiction, Gaiman said, is that it can offer you escape from an otherwise intolerable situation, and it can furnish you with armor, knowledge, weapons, and other tools you can take back into your life to make it better.',
        author: 'Neil Gaiman'
    },
    {
        quote: 'The mechanical act of copying great models is the key to rapid improvement.',
        author: 'Unknown'
    },
    {
        quote: 'The first part of your job is to be compelling enough to get people to pay attention. The second part of your job is to support the development of the tribe. Remember, it’s not about you. If you think it is, you’re not much of a leader.',
        author: 'Michael Port'
    },
    {
        quote: 'Answer all correspondence. Respond to every single email, phone call, tweet, etc. Do this until you can’t possibly keep up anymore. This is how tribes are formed through accessibility.',
        author: 'Jeff Goins'
    },
    {
        quote: 'Write each line as if your life depended on it. Never assume your reader will continue reading your piece once they start.',
        author: 'Jeff Goins'
    },
    {
        quote: "People only buy from you for two reasons. They know you exist and they trust you. Awareness and trust. That\'s all.",
        author: 'Seth Godin'
    },
    {
        quote: 'If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.',
        author: 'James Cameron'
    },
    {
        quote: 'I’m invested in about 30 companies right now. I can always tell which companies will fail and which will succeed simply by the dynamic between the partners',
        author: 'James Altucher'
    },
    {
        quote: "If you\'re looking for a manager, find somebody that's intelligent, energetic and has integrity. If they don\'t have the last, be sure they don\'t have the first two. If you have somebody who lacks integrity, you want them to be dumb and lazy.",
        author: 'Warren Buffett'
    },
    {
        quote: 'Everyone should try podcasting for at least 3-6 episodes, even if just to get better at asking questions and eliminating verbal tics. Those gains transfer everywhere.',
        author: 'Tim Ferriss'
    },
    {
        quote: 'Getting past labels for me was really easy, because I define myself. Don’t worry about what anyone else thinks about, what anyone else says, or how anyone else would want to label you. No one can define you. Only you can define you.',
        author: 'Serena Williams'
    },
    {
        quote: 'Do what you feel in your heart to be right – for you’ll be criticized anyway. You’ll be damned if you do, and damned if you don’t.',
        author: 'Eleanor Roosevelt'
    },
    {
        quote: 'I think if you have ability and talent in one way, you have it in all ways. I’m not a jack of all trades; I’m a master of many. I don’t feel there is anything I can’t do if I want to.',
        author: 'Evel Knievel'
    },
    {
        quote: 'Interdisciplinary communication is where truly great ideas emerge.',
        author: 'Carl Seger'
    },
    {
        quote: 'Any man who bears the ability of a polymath shall not be interfered by specialty, he needs discipline to manage his behaviors and nurture his creativity.',
        author: 'Shawn Lukas'
    },
    {
        quote: 'Realize that everything connects to everything else.',
        author: 'Leonardo Da Vinci'
    },
    {
        quote: 'There are a few men, whom slavery holds fast, but there are many more, who hold fast to slavery.',
        author: 'Seneca'
    },
    {
        quote: 'A man has caught the message of wisdom, if he can die as free from care as when he was at birth',
        author: 'Seneca'
    },
    {
        quote: 'Two things are necessary for great achievement: A plan, and not quite enough time.',
        author: 'Leonard Bernstein'
    },
    {
        quote: 'How you do anything is how you will do everything.',
        author: 'John Wooden'
    },
    {
        quote: 'The key is to keep company with only people that uplift you, whose presence calls forth your best.',
        author: 'Epictetus'
    },
    {
        quote: 'All the best things that I did at Apple came from a) not having money and b) not having done it before, ever. Every single thing that we came out with that was really great, I\'d never once done that thing in my life',
        author: 'Steve Wozniak'
    },
    {
        quote: 'Standard pace is for chumps',
        author: 'Kemo Williams'
    },
    {
        quote: 'Everything that irritates us about others can lead us to an understanding of ourselves.',
        author: 'Carl Jung'
    },
    {
        quote: 'People say that what we’re all seeking is a meaning for life. I don’t think that’s what we’re really seeking. I think that what we’re seeking is an experience of being alive.', author: 'Joseph Campbell'
    },
    {
        quote: 'A good presentation should be like a miniskirt... As short as possible to catch everyone\'s attention and cover only what it needs to cover',
        author: 'Winston Churchill'
    },
    {
        quote: 'One does not accumulate but eliminate. It is not daily increase but daily decrease. The height of cultivation always runs to simplicity.',
        author: 'Bruce Lee'
    },
    {
        quote: 'I find that being in a good mood for creative work is worth the hours it takes to get in a good mood.',
        author: 'B.J.Novak'
    },
    {
        quote: 'Art connects us to ourselves',
        author: 'Ryan Kingslien'
    },
    {
        quote: 'A nation\'s greatness is measured by how it treats its weakest members.',
        author: 'Mahatma Gandhi'
    },
    {
        quote: 'Many want to be an entrepreneur, be their own boss. But to be able to do something good to other people every day - that\'s better than all the riches in the world.',
        author: 'Marc Dillon'
    },
    {
        quote: 'WE MUST FIGHT AGAINST THE SPIRIT OF UNCONSCIOUS CRUELTY WITH WHICH WE TREAT THE ANIMALS. ANIMALS SUFFER AS MUCH AS WE DO. TRUE HUMANITY DOES NOT ALLOW US TO IMPOSE SUCH SUFFERINGS ON THEM. IT IS OUR DUTY TO MAKE THE WHOLE WORLD RECOGNIZE IT. UNTIL WE EXTEND OUR CIRCLE OF COMPASSION TO ALL LIVING THINGS, HUMANITY WILL NOT FIND PEACE.',
        author: 'Albert Schweitzer'
    },
    {
        quote: 'I DO FEEL THAT SPIRITUAL PROGRESS DOES DEMAND AT SOME STAGE THAT WE SHOULD CEASE TO KILL OUR FELLOW CREATURES FOR THE SATISFACTION OF OUR BODILY WANTS.',
        author: 'Mahatma Gandhi'
    },
    {
        quote: 'VEGETARIANISM IS A COMMENDABLE DEPARTURE FROM THE ESTABLISHED BARBARIAN HABIT. EVERY EFFORT SHOULD BE MADE TO STOP THE WANTON, CRUEL SLAUGHTER OF ANIMALS, WHICH MUST BE DESTRUCTIVE TO OUR MORALS.',
        author: 'Nikola Tesla'
    },
    {
        quote: 'BESIDES AGREEING WITH THE AIMS OF VEGETARIANISM FOR AESTHETIC AND MORAL REASONS, IT IS MY VIEW THAT A VEGETARIAN MANNER OF LIVING, BY ITS PURELY PHYSICAL EFFECT ON THE HUMAN TEMPERAMENT, WOULD MOST BENEFICIALLY INFLUENCE THE LOT OF MANKIND.',
        author: 'Albert Einstein'
    },
    {
        quote: 'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
        author: 'Marcus Aurelius'
    },
    {
        quote: "Business, like life, is all about how you make people feel. It's that simple, and it's that hard.",
        author: 'Danny Meyer'
    },
    {
        quote: 'Discipline equals freedom.', author: 'Jocko Willink'
    },
    {
        quote: 'What one does is what counts. Not what one had the intention of doing.',
        author: 'Pablo Picasso'
    },
    {
        quote: 'Speech, the most specifically human sound, and the most significant kind of sound, is never just scenery, it’s always event.',
        author: 'Ursula Le Guin'
    },
    {
        quote: 'Words are events, they do things, change things. They transform both speaker and hearer; they feed energy back and forth and amplify it. They feed understanding or emotion back and forth and amplify it.',
        author: 'Ursula Le Guin'
    },
    {
        quote: 'Our gifts are nothing if they aren’t shared... it isn’t all about us.',
        author: 'Mairi'
    },
    {
        quote: 'Business is about building a sustainable way of making the impact that you care about making.',
        author: 'Danny Iny'
    },
    {
        quote: "There are two ways of exerting one's strength: one is pushing down, the other is pulling up.",
        author: 'Booker T. Washington'
    },
    {
        quote: 'In the face of absolute uncertainty there is absolute creativity.  In the face of absolute certainty there is zero chance of creativity',
        author: 'Deepak Chopra'
    },
    {
        quote: 'A man is not old until regrets take the place of dreams',
        author: 'John Barrymore'
    },
    {
        quote: 'The purpose of life is a life of purpose',
        author: 'Robert Byrne'
    },
    {
        quote: 'In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.',
        author: 'Roosevelt'
    },
    {
        quote: 'Never serve anything you wouldn\'t eat',
        author: 'sam kass\' mentor in viennese michelin restaurant'
    },
    {
        quote: 'Key in any high pressure situation, 75\% of the success is staying calm and not losing your nerve. The rest you figure out. But once you lose your calm, everything else starts falling apart fast.',
        author: 'Sam Kass'
    },
    {
        quote: 'Mitä sinulle antaa ihminen, jonka olet itse saanut alulle? Kaiken, kunhan on olemassa.',
        author: 'Unknown'
    },
    {
        quote: 'Every artist is an entrepreneur and every entrepreneur is an artist',
        author: 'Doctor E McGucken'
    },
    {
        quote: 'Out of every one hundred men... Ten shouldn’t even be there... Eighty are just targets... Nine are the real fighters... and we’re LUCKY to have them, for they make the battle... Ah, but the one... One is a Warrior, and he will bring the others back.',
        author: 'Heraclitus'
    },
    {
        quote: "If you care enough for your work to be critisized for it, you've done a good days work",
        author: 'Seth Godin'
    },
    {
        quote: 'When learning is easy, it doesn’t stick',
        author: 'Peter C. Brown'
    },
    {
        quote: 'When I write, I feel like an armless, legless man with a crayon in his mouth.',
        author: 'Kurt Vonnegut'
    },
    {
        quote: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage', author: 'Lao Tzu'
    },
    {
        quote: 'The two most important days in your life are the day you\'re born and the day you find out why.',
        author: 'Mark Twain'
    },
    {
        quote: 'You can always tell who the pioneers are because they have arrows in their back and are lying face down in the dirt.',
        author: 'Unknown'
    },
    {
        quote: 'If you want to achieve success, all you need to do is find a way to model those who have already succeeded.',
        author: 'Tony Robbins'
    },
    {
        quote: 'You almost have to have a certain level of ignorance to be a good entrepreneur, because if you knew all of the things ahead, you wouldn\'t even start',
        author: 'Brian Smith, Founder of UGG boots'
    },
    {
        quote: 'Comfort in our failures allows us to act without fear, to engage without judgment, to love without conditions',
        author: 'Mark Manson'
    },
    {
        quote: 'Whether you think you can, or you think you can’t - you’re right.',
        author: 'Henry Ford'
    },
    {
        quote: 'If you take pictures, take pictures of people. Unless you\'re Ansel Adams. If you\'re at Eiffel Towel, don\'t take pictures of just the tower because it\'s been done very well already. The human with you makes it unique.',
        author: 'Stu Maschwitz (not a direct quote)'
    },
    {
        quote: 'If you want something you have never had, you must do something you have never done.',
        author: 'Thomas Jefferson'
    },
    {
        quote: 'They may forget what you said (or did) - but they will never forget how you made them feel.',
        author: 'Carl W. Buehner (earliest reference)'
    },
    {
        quote: 'Kun jakaa elämänsä toisen kanssa, ei elä niin kauan. (When you share a life with someone, you don\'t live as long).',
        author: 'Lennarth 11v'
    },
    {
        quote: 'The women who have looked at themselves, their shortcomings, and worked through their own past emotional pain are the ones who can best hold space for emotional men.',
        author: 'Jordan Gray'
    },
    {
        quote: 'You develop an instant global consciousness, a people orientation, an intense dissatisfaction with the state of the world, and a compulsion to do something about it. From out there on the moon, international politics look so petty. You want to grab a politician by the scruff of the neck and drag him a quarter of a million miles out and say, \"Look at that, you son of a bitch.\"',
        author: 'Edgar Mitchell, Apollo 14 astronaut, People magazine, 8 April 1974'
    },
    {
        quote: 'Don\'t ask what the world needs, ask what makes you come alive, and go do it.Because what the world needs is people who have come alive.',
        author: 'Howard Thurman'
    },
    {
        quote: 'The secret of success is constancy of purpose.',
        author: 'Benjamin Disraeli'
    },
    {
        quote: 'The cave you fear holds the treasure you seek.',
        author: 'Joseph Campbell'
    },
    {
        quote: 'A professional writer is an amateur who didn\'t quit.',
        author: 'Richard Bach'
    },
    {
        quote: 'You fail only if you stop writing.',
        author: 'Ray Bradbury'
    },
    {
        quote: 'If your life\'s work can be accomplished in your lifetime, you\'re not thinking big enough',
        author: 'Dr Wes Jackson, MacArthur Fellow'
    },
    {
        quote: 'Simplicity is the key to brilliance.',
        author: 'Bruce Lee'
    },
    {
        quote: 'Calvin Coolidge once said that nothing is more common than unsuccessful men with talent; I would add that the second most common is smart people who think their IQ or resume justifies delivering late. Don\'t tolerate it.',
        author: 'Tim Ferriss'
    },
    {
        quote: 'We are what we repeatedly do. Excellence, then, is not an act but a habit.',
        author: 'Aristotles'
    }
]