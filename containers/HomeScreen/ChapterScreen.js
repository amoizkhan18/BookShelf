import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  PanResponder,
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const FakePdfScreen = () => {
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const windowHeight = Dimensions.get('window').height;
  const zoomValue = useSharedValue(1);

  let lastTap = null; // To store the timestamp of the last tap

  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.y;
    setScrollOffset(offset);
  };

  const calculateReadingProgress = () => {
    if (contentHeight === 0) return 0;
    return Math.min((scrollOffset / (contentHeight - windowHeight)) * 100, 100);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: () => {
      const now = Date.now();
      if (lastTap && now - lastTap < 300) {
        // Double-tap detected (300ms threshold)
        zoomValue.value = withTiming(zoomValue.value === 1 ? 1.1 : 1, { duration: 300 });
      }
      lastTap = now;
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: zoomValue.value }],
  }));

  // Text content for each page with different styles
  const pagesContent = [
    {
      content: "The Legend Of Sleepy Hollow",
      style: styles.pageContentStyle1,
    },
    {
      content: "A pleasing land of drowsy head it was, Of dreams that wave before the half-shut eye And of gay castles in the clouds that pass, Forever flushing round a summer sky. CASTLE OF INDOLENCE. IN the bosom of one of those spacious coves which indent the eastern shore of the Hudson, at that broad expansion of the river denominated by the ancient Dutch navigators the Tappan Zee, and where they always prudently shortened sail and implored the protection of St. Nicholas when they crossed, there lies a small market town or rural port, which by some is called Greensburgh, but which is more generally and properly known by the name of Tarry Town. This name was given, we are told, in former days, by the good housewives of the adjacent country, from the inveterate propensity of their husbands to linger about the village tavern on market days. Be that as it may, I do not vouch for the fact, but merely advert to it, ",
      style: styles.pageContentStyle2,
    },
    {
      content: "for the sake of being precise and authentic. Not far from this village, perhaps about two miles, there is a little valley or rather lap of land among high hills, which is one of the quietest places in the whole world. A small brook glides through it, with just murmur enough to lull one to repose; and the occasional whistle of a quail or tapping of a woodpecker is almost the only sound that ever breaks in upon the uniform tranquillity. I recollect that, when a stripling, my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes. If ever I should wish for a retreat whither I might steal from the world and its distractions, and dream quietly away the remnant of a troubled ",
      style: styles.pageContentStyle3,
    },
    {
      content: "life, I know of none more promising than this little valley. From the listless repose of the place, and the peculiar character of its inhabitants, who are descendants from the original Dutch settlers, this sequestered glen has long been known by the name of SLEEPY HOLLOW, and its rustic lads are called the Sleepy Hollow Boys throughout all the neighboring country. A drowsy, dreamy influence seems to hang over the land, and to pervade the very atmosphere. Some say that the place was bewitched by a High German doctor, during the early days of the settlement; others, that an old Indian chief, the prophet or wizard of his tribe, held his powwows there before the country was discovered by Master Hendrick Hudson. Certain it is, the place still continues under the sway of some witching power, that holds a spell over the minds of the good people, causing them to walk in a",
      style: styles.pageContentStyle4,
    },
    {
      content: "continual reverie. They are given to all kinds of marvellous beliefs, are subject to trances and visions, and frequently see strange sights, and hear music and voices in the air. The whole neighborhood abounds with local tales, haunted spots, and twilight superstitions; stars shoot and meteors glare oftener across the valley than in any other part of the country, and the nightmare, with her whole ninefold, seems to make it the favorite scene of her gambols. The dominant spirit, however, that haunts this enchanted region, and seems to be commander-in-chief of all the powers of the air, is the apparition of a figure on horseback, without a head. It is said by some to be the ghost of a Hessian trooper, whose head had been carried away by a cannon-ball, in some nameless battle during the Revolutionary War, and who is ever and anon seen by the country folk hurrying along in the gloom of night, as if on the wings",
      style: styles.pageContentStyle5,
    },
    {
      content: "of the wind. His haunts are not confined to the valley, but extend at times to the adjacent roads, and especially to the vicinity of a church at no great distance. Indeed, certain of the most authentic historians of those parts, who have been careful in collecting and collating the floating facts concerning this spectre, allege that the body of the trooper having been buried in the churchyard, the ghost rides forth to the scene of battle in nightly quest of his head, and that the rushing speed with which he sometimes passes along the Hollow, like a midnight blast, is owing to his being belated, and in a hurry to get back to the churchyard before daybreak. Such is the general purport of this legendary superstition, which has furnished materials for many a wild story in that region of shadows; and the spectre is known at all the country firesides, by the name of the Headless Horseman of Sleepy ",
      style: styles.pageContentStyle6,
    },
    {
      content: "Hollow. It is remarkable that the visionary propensity I have mentioned is not confined to the native inhabitants of the valley, but is unconsciously imbibed by every one who resides there for a time. However wide awake they may have been before they entered that sleepy region, they are sure, in a little time, to inhale the witching influence of the air, and begin to grow imaginative, to dream dreams, and see apparitions. I mention this peaceful spot with all possible laud, for it is in such little retired Dutch valleys, found here and there embosomed in the great State of New York, that population, manners, and customs remain fixed, while the great torrent of migration and improvement, which is making such incessant changes in other parts of this restless country, sweeps by them unobserved. They are like those little nooks of still water, which border a rapid stream, where we may see the ",
      style: styles.pageContentStyle7,
    },
    {
      content: "straw and bubble riding quietly at anchor, or slowly revolving in their mimic harbor, undisturbed by the rush of the passing current. Though many years have elapsed since I trod the drowsy shades of Sleepy Hollow, yet I question whether I should not still find the same trees and the same families vegetating in its sheltered bosom. In this by-place of nature there abode, in a remote period of American history, that is to say, some thirty years since, a worthy wight of the name of Ichabod Crane, who sojourned, or, as he expressed it, “tarried,” in Sleepy Hollow, for the purpose of instructing the children of the vicinity. He was a native of Connecticut, a State which supplies the Union with pioneers for the mind as well as for the forest, and sends forth yearly its legions of frontier woodmen and country schoolmasters. The cognomen of Crane was not inapplicable to his person. He was tall, but ",
      style: styles.pageContentStyle8,
    },
    {
      content: "exceedingly lank, with narrow shoulders, long arms and legs, hands that dangled a mile out of his sleeves, feet that might have served for shovels, and his whole frame most loosely hung together. His head was small, and flat at top, with huge ears, large green glassy eyes, and a long snipe nose, so that it looked like a weather-cock perched upon his spindle neck to tell which way the wind blew. To see him striding along the profile of a hill on a windy day, with his clothes bagging and fluttering about him, one might have mistaken him for the genius of famine descending upon the earth, or some scarecrow eloped from a cornfield. His schoolhouse was a low building of one large room, rudely constructed of logs; the windows partly glazed, and partly patched with leaves of old copybooks. It was most ingeniously secured at vacant hours, by a withe twisted in the handle of the door, and stakes set ",
      style: styles.pageContentStyle9,
    },
    {
      content: "against the window shutters; so that though a thief might get in with perfect ease, he would find some embarrassment in getting out,—an idea most probably borrowed by the architect, Yost Van Houten, from the mystery of an eelpot. The schoolhouse stood in a rather lonely but pleasant situation, just at the foot of a woody hill, with a brook running close by, and a formidable birch-tree growing at one end of it. From hence the low murmur of his pupils’ voices, conning over their lessons, might be heard in a drowsy summer’s day, like the hum of a beehive; interrupted now and then by the authoritative voice of the master, in the tone of menace or command, or, peradventure, by the appalling sound of the birch, as he urged some tardy loiterer along the flowery path of knowledge. Truth to say, he was a conscientious man, and ever bore in mind the golden maxim, “Spare the rod and spoil the child.” Ichabod ",
      style: styles.pageContentStyle10,
    },
    {
      content: "Crane’s scholars certainly were not spoiled. I would not have it imagined, however, that he was one of those cruel potentates of the school who joy in the smart of their subjects; on the contrary, he administered justice with discrimination rather than severity; taking the burden off the backs of the weak, and laying it on those of the strong. Your mere puny stripling, that winced at the least flourish of the rod, was passed by with indulgence; but the claims of justice were satisfied by inflicting a double portion on some little tough wrong-headed, broad-skirted Dutch urchin, who sulked and swelled and grew dogged and sullen beneath the birch. All this he called “doing his duty by their parents;” and he never inflicted a chastisement without following it by the assurance, so consolatory to the smarting urchin, that “he would remember it and thank him for it the longest day he had to live.” When school hours were ",
      style: styles.pageContentStyle10,
    },
    {
      content: "over, he was even the companion and playmate of the larger boys; and on holiday afternoons would convoy some of the smaller ones home, who happened to have pretty sisters, or good housewives for mothers, noted for the comforts of the cupboard. Indeed, it behooved him to keep on good terms with his pupils. The revenue arising from his school was small, and would have been scarcely sufficient to furnish him with daily bread, for he was a huge feeder, and, though lank, had the dilating powers of an anaconda; but to help out his maintenance, he was, according to country custom in those parts, boarded and lodged at the houses of the farmers whose children he instructed. With these he lived successively a week at a time, thus going the rounds of the neighborhood, with all his worldly effects tied up in a cotton handkerchief. That all this might not be too onerous on the purses of his rustic patrons, who ",
      style: styles.pageContentStyle10,
    },
    {
      content: "are apt to consider the costs of schooling a grievous burden, and schoolmasters as mere drones, he had various ways of rendering himself both useful and agreeable. He assisted the farmers occasionally in the lighter labors of their farms, helped to make hay, mended the fences, took the horses to water, drove the cows from pasture, and cut wood for the winter fire. He laid aside, too, all the dominant dignity and absolute sway with which he lorded it in his little empire, the school, and became wonderfully gentle and ingratiating. He found favor in the eyes of the mothers by petting the children, particularly the youngest; and like the lion bold, which whilom so magnanimously the lamb did hold, he would sit with a child on one knee, and rock a cradle with his foot for whole hours together. In addition to his other vocations, he was the singing-master of the neighborhood, and picked up ",
      style: styles.pageContentStyle10,
    },
    {
      content: "many bright shillings by instructing the young folks in psalmody. It was a matter of no little vanity to him on Sundays, to take his station in front of the church gallery, with a band of chosen singers; where, in his own mind, he completely carried away the palm from the parson. Certain it is, his voice resounded far above all the rest of the congregation; and there are peculiar quavers still to be heard in that church, and which may even be heard half a mile off, quite to the opposite side of the millpond, on a still Sunday morning, which are said to be legitimately descended from the nose of Ichabod Crane. Thus, by divers little makeshifts, in that ingenious way which is commonly denominated “by hook and by crook,” the worthy pedagogue got on tolerably enough, and was thought, by all who understood nothing of the labor of headwork, to have a wonderfully easy life of it. The ",
      style: styles.pageContentStyle10,
    },
    {
      content: "schoolmaster is generally a man of some importance in the female circle of a rural neighborhood; being considered a kind of idle, gentlemanlike personage, of vastly superior taste and accomplishments to the rough country swains, and, indeed, inferior in learning only to the parson. His appearance, therefore, is apt to occasion some little stir at the tea-table of a farmhouse, and the addition of a supernumerary dish of cakes or sweetmeats, or, peradventure, the parade of a silver teapot. Our man of letters, therefore, was peculiarly happy in the smiles of all the country damsels. How he would figure among them in the churchyard, between services on Sundays; gathering grapes for them from the wild vines that overran the surrounding trees; reciting for their amusement all the epitaphs on the tombstones; or sauntering, with a whole bevy of them, along the banks of the adjacent millpond; while the more ",
      style: styles.pageContentStyle10,
    },
    {
      content: "bashful country bumpkins hung sheepishly back, envying his superior elegance and address. From his half-itinerant life, also, he was a kind of travelling gazette, carrying the whole budget of local gossip from house to house, so that his appearance was always greeted with satisfaction. He was, moreover, esteemed by the women as a man of great erudition, for he had read several books quite through, and was a perfect master of Cotton Mather’s “History of New England Witchcraft,” in which, by the way, he most firmly and potently believed. He was, in fact, an odd mixture of small shrewdness and simple credulity. His appetite for the marvellous, and his powers of digesting it, were equally extraordinary; and both had been increased by his residence in this spell-bound region. No tale was too gross or monstrous for his capacious swallow. It was often his delight, ",
      style: styles.pageContentStyle10,
    },
    {
      content: "after his school was dismissed in the afternoon, to stretch himself on the rich bed of clover bordering the little brook that whimpered by his schoolhouse, and there con over old Mather’s direful tales, until the gathering dusk of evening made the printed page a mere mist before his eyes. Then, as he wended his way by swamp and stream and awful woodland, to the farmhouse where he happened to be quartered, every sound of nature, at that witching hour, fluttered his excited imagination,—the moan of the whip-poorwill from the hillside, the boding cry of the tree toad, that harbinger of storm, the dreary hooting of the screech owl, or the sudden rustling in the thicket of birds frightened from their roost. The fireflies, too, which sparkled most vividly in the darkest places, now and then startled him, as one of uncommon brightness would stream across his path; and if, by chance, a huge blockhead of a ",
      style: styles.pageContentStyle10,
    },
    {
      content: "beetle came winging his blundering flight against him, the poor varlet was ready to give up the ghost, with the idea that he was struck with a witch’s token. His only resource on such occasions, either to drown thought or drive away evil spirits, was to sing psalm tunes and the good people of Sleepy Hollow, as they sat by their doors of an evening, were often filled with awe at hearing his nasal melody, “in linked sweetness long drawn out,” floating from the distant hill, or along the dusky road. Another of his sources of fearful pleasure was to pass long winter evenings with the old Dutch wives, as they sat spinning by the fire, with a row of apples roasting and spluttering along the hearth, and listen to their marvellous tales of ghosts and goblins, and haunted fields, and haunted brooks, and haunted bridges, and haunted houses, and particularly of the headless horseman, or Galloping Hessian of the Hollow, as they ",
      style: styles.pageContentStyle10,
    },
    {
      content: "sometimes called him. He would delight them equally by his anecdotes of witchcraft, and of the direful omens and portentous sights and sounds in the air, which prevailed in the earlier times of Connecticut; and would frighten them woefully with speculations upon comets and shooting stars; and with the alarming fact that the world did absolutely turn round, and that they were half the time topsy-turvy! But if there was a pleasure in all this, while snugly cuddling in the chimney corner of a chamber that was all of a ruddy glow from the crackling wood fire, and where, of course, no spectre dared to show its face, it was dearly purchased by the terrors of his subsequent walk homewards. What fearful shapes and shadows beset his path, amidst the dim and ghastly glare of a snowy night! With what wistful look did he eye every trembling ray of light streaming across the waste fields from ",
      style: styles.pageContentStyle10,
    },
    {
      content: "some distant window! How often was he appalled by some shrub covered with snow, which, like a sheeted spectre, beset his very path! How often did he shrink with curdling awe at the sound of his own steps on the frosty crust beneath his feet; and dread to look over his shoulder, lest he should behold some uncouth being tramping close behind him! And how often was he thrown into complete dismay by some rushing blast, howling among the trees, in the idea that it was the Galloping Hessian on one of his nightly scourings All these, however, were mere terrors of the night, phantoms of the mind that walk in darkness; and though he had seen many spectres in his time, and been more than once beset by Satan in divers shapes, in his lonely perambulations, yet daylight put an end to all these evils; and he would have passed a pleasant life of it, in despite of the Devil and all his works, if his path had not been crossed by a being ",
      style: styles.pageContentStyle10,
    },
    {
      content: "that causes more perplexity to mortal man than ghosts, goblins, and the whole race of witches put together, and that was—a woman. Among the musical disciples who assembled, one evening in each week, to receive his instructions in psalmody, was Katrina Van Tassel, the daughter and only child of a substantial Dutch farmer. She was a blooming lass of fresh eighteen; plump as a partridge; ripe and melting and rosy-cheeked as one of her father’s peaches, and universally famed, not merely for her beauty, but her vast expectations. She was withal a little of a coquette, as might be perceived even in her dress, which was a mixture of ancient and modern fashions, as most suited to set off her charms. She wore the ornaments of pure yellow gold, which her great-great-grandmother had brought over from Saardam; the tempting stomacher of the olden time, and withal a provokingly short ",
      style: styles.pageContentStyle10,
    },
    {
      content: "petticoat, to display the prettiest foot and ankle in the country round. Ichabod Crane had a soft and foolish heart towards the sex; and it is not to be wondered at that so tempting a morsel soon found favor in his eyes, more especially after he had visited her in her paternal mansion. Old Baltus Van Tassel was a perfect picture of a thriving, contented, liberal-hearted farmer. He seldom, it is true, sent either his eyes or his thoughts beyond the boundaries of his own farm; but within those everything was snug, happy and well-conditioned.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 23: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 24: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 25: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 26: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 27: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 28: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 29: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 30: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 31: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 32: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 33: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 34: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 35: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 36: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 37: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 38: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 39: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 40: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 41: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 42: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 43: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 44: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 45: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 46: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 47: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 48: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 49: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
    {
      content: "Page 50: Final page with a closing note.",
      style: styles.pageContentStyle10,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Content */}
      <View style={styles.contentContainer}>
        <ScrollView
          onContentSizeChange={(width, height) => setContentHeight(height)}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <Animated.View style={[styles.pdfContent, animatedStyle]} {...panResponder.panHandlers}>
            {pagesContent.map((page, index) => (
              <View key={index} style={styles.page}>
                <Text style={page.style}>{page.content}</Text> {/* Apply the custom style */}
              </View>
            ))}
          </Animated.View>
        </ScrollView>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBar, { height: `${calculateReadingProgress()}%` }]}
          />
          <Text style={styles.progressText}>
            {Math.round(calculateReadingProgress())}%
          </Text>
        </View>
      </View>

      {/* Page Numbers at the Bottom */}
      <View style={styles.pageNumberContainer}>
        <Text style={styles.pageNumberText}>
          Page {Math.floor(scrollOffset / windowHeight) + 1} of {pagesContent.length}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  pdfContent: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  page: {
    height: Dimensions.get('window').height,
    marginBottom: 20,
    backgroundColor: '#fffff',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    elevation: 2,
  },
  progressBarContainer: {
    width: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    height: '100%',
    flexDirection: 'column-reverse',
  },
  progressBar: {
    backgroundColor: '#E04B07',
    width: 10,
    borderRadius: 10,
  },
  progressText: {
    marginTop: 10,
    fontSize: 7,
    color: '#e0e0e0',
    fontWeight: 'bold',
  },

  // Page content styles
  pageContentStyle1: {
    fontSize: 30,
    lineHeight: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pageContentStyle2: {
    fontSize: 20,
    lineHeight: 28,
    color: 'black',
    fontWeight: '500'
  },
  pageContentStyle3: {
     fontSize: 20,
    lineHeight: 28,
    color: 'black',
    fontWeight: '500'
  },
  pageContentStyle4: {
    fontSize: 20,
    lineHeight: 28,
    color: 'black',
    fontWeight: '500' // Example: Increased letter spacing for page 4
  },
  pageContentStyle5: {
     fontSize: 20,
    lineHeight: 28,
    color: 'black',
    fontWeight: '500' // Example: Uppercase for page 5
  },
  pageContentStyle6: {
     fontSize: 20,
    lineHeight: 28,
    color: 'black',
    fontWeight: '500' // Example: Monospace font for page 6
  },
  pageContentStyle7: {
     fontSize: 20,
    lineHeight: 28,
    color: 'black',
    fontWeight: '500' // Example: Normal font weight for page 7
  },
  pageContentStyle8: {
     fontSize: 20,
    lineHeight: 28,
    color: 'black',
    fontWeight: '500' // Example: Background color for page 8
  },
  pageContentStyle9: {
     fontSize: 20,
    lineHeight: 28,
    color: 'black',
    fontWeight: '500' // Example: Normal text style for page 9
  },
  pageContentStyle10: {
     fontSize: 20,
    lineHeight: 28,
    color: 'black',
    fontWeight: '500' // Example: Bold for page 10
  },

  // Page number container style
  pageNumberContainer: {
    position: 'absolute',
    bottom: 20,
    left: Dimensions.get('window').width / 2 - 70,
    backgroundColor: '#000000aa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  pageNumberText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FakePdfScreen;
