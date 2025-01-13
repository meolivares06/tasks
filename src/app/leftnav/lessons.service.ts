import {Injectable, signal} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {Lesson} from '../models';

const conteudo1 = "<p>O batismo é uma ordenança de Jesus a sua lgreja Mt 28.19,20. Jesus incumbiu seus discipulos de fazer discipulos e batizá-los. A Igreja de Cristo é composta por discipulos e, portanto, é a continuadora da obra dos primeiros discipulos.</p>" +

  "<p>O batismo, sendo uma ordem, não pode ser um assunto de opinião particular. Todo aquele que quer obedecer a ordem de Jesus há de passar pelas águas do batismo.</p>" +

  "<p><strong>Verdades que todos precisam saber a respeito do batismo:</strong></p>" +

  "<p><strong>1.0 que significa a palavra \"batismo\"</strong> A palavra batismo vem do grego \"baptizo\" e significa \"imergir, \"afundar\". Somos batistas porque batizamos imergindo as pessoas. O nome batista vem da palavra batismo, e a palavra batismo significa \"imergir.</p>" +

  "<p>Ex.: O nome de João Batista era apenas João-Lc 1.63. Batista era o apelido de João porque ele batizava as pessoas imergindo-as-João 3.23.</p>" +

  "<p><strong>2. A forma do batismo -</strong> Se a palavra batismo significa imergir, afundar, entendemos, então, que a forma biblica do batismo é por imersão do corpo inteiro. Por esta razão, nós, batistas, só aceitamos o batismo por imersão, por entendermos ser a forma bíblica de batismo. Outras formas praticadas são o batismo por aspersão e efusão (derramamento).</p>" +

  "<p><strong>3. A fórmula do batismo -</strong>A fórmula ensinada por Jesus é a única fórmula realmente biblica: \"Em nome do Pai, do Filho e do Espírito Santo\". Há algumas heresias sendo ensinadas que dizem que o batismo deve ser somente em nome de Jesus, mas não foi isso que o proprio Jesus ensinou. Os textos usados pelos hereges para tal afirmação são tirados de seu contexto. Fiquemos com aquilo que foi ensinado por Jesus - Mt 28.19.</p>" +

  "<p><strong>4. As condições para ser batizado:</strong>" +

  "<p><strong>4.1. Crer </strong> (esse crer da Biblia implica obedecer)-Marcos 16.16, Atos 8.36-38.</p>" +

  "<p><strong>Crer em que?</strong></p>" +

  "<ul><li>- Que Jesus é o Filho de Deus enviado para ser o nosso Salvador,</li>" +

  "<li>- Que o homem sem Deus está eternamente perdido e sem esperança;</li>" +

  "<li>- Que a morte de Jesus na cruz foi a minha morte, no meu lugar;</li>" +

  "<li>- Que na cruz Jesus pagou preço pelos meus pecados e por isso perdoado.</li></ul>" +

  "<p><strong>4.2. Arrependimento -Lucas 13.5, Atos 2.38.</strong></p>" +

  "<p>Arrepender-se do que?</p>" +

  "<ul><li>- Dos pecados cometidos;</li>" +

  "<li>- do modo de vida da velha vida.</li></ul>" +

  "<p><strong>4.3. Confissão - Romanos 10.9, 1 João 1.7-9.</strong></p>" +

  "<ul><li>Confessar verbalmente o Senhorio de Jesus em sua vida;</li>" +

  "<li>confessar os pecados para receber a purificação pelo sangue de Jesus.</li></ul>" +

  "<p><strong>4.4. Novo Nascimento - João 3.3.</strong></p>" +

  "<p>O novo nascimento é chamado de regeneração. Regenerar é gerar de novo para unma nova vida. O apóstolo Paulo diz que em Cristo somos nova criação, ou seja, somos criados de novo -2 Coríntios 5.17.</p>" +

  "<p><strong>Como ele é operado em nós?</strong></p>" +

  "<ul><li>- E obra do Espírito Santo no coração;</li>" +

  "<li>- é ação da Palavra que age;</li>" +

  "<li>é decisăo para mudança de Reino. E mudança de vida, de valores, de perspectivas.</li>" +

  "<p><strong>5. O batismo salva?</strong> Não. O batismo não salva. Para ser batizado o candidato precisa ter certeza de sua salvação. Como se obtêm esta certeza? Através do processo do novo nascimento, no qual o Espírito Santo passa a habitar no coração do salvo, dando-Ihe a certeza da salvação. Quem salva é Jesus, não os ritos ou ordenanças.</p>" +

  "<p><strong>Por que, então, é necessário ser batizado?</strong></p>" +

  "<p>Porque se alguém diz ser salvo, certamente haverá de obedecer ao Salvador. O salvo obedece, quem diz ser salvo mas não se dispõe a obedecer esta enganado quanto à salvação.</p>" +

  "6.<p><strong> 0 batismo purifica pecados?</strong> Não. O que purifica pecados éo sangue de Jesus-1 João 1.7. Se cada vez que fizéssemos algo errado fosse necesario ser batizado, teríamos que passar pelo batismo muitas vezes. O crente não vive na pratica do pecado, mas atingirá a perfeição somente na vinda de nosso Senhor Jesus.</p>" +

  "7.<p><strong>Qual é o valor do batismo?</strong></p>" +

  "<li><li>- Ele é a marca do novo nascimento João 3.5;</li>" +

  "<li>- é a conissao pública de que somos discipulos de Jesus- Mateus 10.04</li>" +

  "<li>- Simboliza 0 sepultamento do velho homem- Colossenses 2.12</li></ul>" +


  "8.<p><strong>Por que não praticamos o batismo infantil:</strong></p>" +

  "8.1.<p>porque não temos base bíblica para o batismo de crianças;</p>" +

  "8.2.<p>para ser salvo é preciso confessar verbalmente o senhorio de Jesus- Rm 10.9;</p>" +

  "8.3.<p>quando nenen, apresentamos a Jesus; assim que aprende a falar, levamos a criança a receber Jesus como Salvador, e quando já sabe discernir entre o certo e o errado, então, pode cumprir com a ordem de Jesus.</p>";
//__________________________________________________________________________________________________________________________________
const content2 = "<p>A segunda ordenança que Jesus deixou para a lgreja foi a Ceia. Esta ordenança foi instituida pelo Senhor horas antes de sua morte, como um memorial da nova aliança, o novo pacto que Ele estava fazendo com os homens; aliança esta que seria selada com seu próprio sangue Mateus 26.26-28.</p>" +
  "<p>Participar da Ceia é paticipar da nova vida em Cristo.</p>" +

  "<p><strong>1.0 que é a Ceia do Senhor?</strong></p>" +

  "<p>O apóstolo Paulo nos dá um ensino detalhado do que é a Ceia do Senhor em 1 Coríntios 11.23-32.</p>" +

  "<p><strong>1.1. E comemoração</strong> - \"Fazei isto em memória de mim\". Cada vez que um grupo de cristãos se reúne para celebrar a Ceia do Senhor, está comemorando a vitória no Calvário, pois foi ali, na cruz, que Jesus despojou principados e pagou nossa divida com Deus - Colossenses 2.14,15. Somos salvos por sua morte em nosso lugar.</p>" +
  "<p><strong>1.2. É instrução</strong> A Ceia do Senhor é uma lição objetiva que expõe dois fundamentos do Evangelho:</p>" +

  "<p><strong>1.2.1. A encarnação</strong> - Ao participarmos do pão ouvimos o que o apóstolo João nos diz: \"E o Verbo se fez carne e habitou entre nós\" João 1.14. Com encarnação queremos dizer que Jesus virou gente como a gente e se tornou um legitimo representante da raça humana como homem perfeito, sem pecado, pois foi gerado pelo Espirito Santo;</p>" +

  "<p><strong>1.2.2. A Expiação</strong> Expiar é pagar a pena, cumprir a pena imposta. Foi exatamente isso que Jesus fez: pagou a pena que era nossa- Romanos 6.23.</p>" +

  "<p><strong>1.3. E inspiração</strong> Os elementos, especialmente o vinho, nos lembram que, pela fé, podemos participar da natureza de Cristo, ter comunhão com Ele - 2 Pedro 1.4.</p>" +

  "<p><strong>1.4. E segurança</strong> \"Este cálice é o Novo Testamento no meu sangue\"- Lucas 22.20. O sangue é garantia de que somos limpos de todo pecado, segundo o texto de 1 Joao 1.9.</p>" +

  "<p><strong>1.5. E anunciação -\"Anunciais a morte do Senhor até que Ele venha - 1 Coríntios 11.26. Ao participarmos da ela, estamos anunciando que Jesus vai voltar.</p>" +

  "<p><strong>2. Quem pode participar da Ceia do Senhor?</strong><ul><li>- Os regenerados, que nasceram de novo;</li> <li>-os discipulos de Jesus note que Jesus ministrou a primeira Ceia Somente aos discípulos;</li> <li>- aqueles que já professaram a Jesus publicamente através do batismo.</li></ul></p>" +

  "<p><strong>3. Condições para o crente participar da Ceia do Senhor:</strong></p>" +
  "<p><strong>3.1. Com a vida em ordem, livre de pecados -1 Coríntios 11.27.</strong></p>" +

  "<p>Todo aquele que participa da Ceia do Senhor com pecados não confessados é culpado de sua morte.</p>" +

  "<p><strong>3.2. Examinando-se a si mesmo -1 Coríntios 11.28.</strong></p>" +

  "<p>Não espere alguém apontar os teus pecados. Examina a tua vida com base na Palavra, confesse e abandone a prática do pecado. Faça sempre um autoexame e busque a purificação pelo precioso sangue de Jesus.</p>" +

  "<p><strong>3.3. Discernindo o Corpo 1 Coríntios 11.29.</strong></p>" +

  "<p>Isto é, entendendo o que está fazendo.</p>" +

  "<p><strong>4. O que acontece quando se participa da Ceia do Senhor indignamente?</strong></p>" +

  "<p>1 Coríntios 11.30:</p>" +

  "<ul><li>- fraqueza espiritual;</li>" +

  "<li>- dormência espiritual;</li>" +

  "<li>- doenças fisicas e espirituais.</li></ul>" +

  "<p>Obs.: Nunca deixe de participar da Ceia do Senhor. Se houver pecados a serem confessados e abandonados, resolva, pois o inimigo de nossa mas sabe que ao participar da Ceia do Senhor o crente é fortalecido - João 6.53-56. Jesus diz que se nao comermos da sua carne e não bebermos do seu sangue não temos parte parte com Ele; isso significa ter comunhão plena com Ele, participar da Sua vida. Ao participarmos da Ceia do Senhor comunhăo plena com Jesus e participamos da Sua vida.</p>" +
  "<p><strong>5. As formas de celebrar a Ceia:</p>" +

  "<p><strong>5.1. Transubstanciação</strong> - E a transformação literal do pão e vinho em carne e sangue de Jesus. E a forma de celebração da lgreja Catolica Romana. Não cremos desta forma.</p>" +
  "<p><strong>5.2. Consubstanciação</strong> - E a presença espiritual de Jesus na comunhão. A presença de Jesus na comunhão não é fisica, mas espiritual. Algumas igrejas protestantes celebram, crendo dessa forma.</p>" +
  "<p><strong>5.3. Memorial</strong> E comemoração da nossa vitória sobre o pecado e a morte através da morte de Cristo. A presença do Senhor nos elementos (pão e vinho) não ê fisica e nem espiritual. Por isso, nós, Batistas, realizamos a Ceia do Senhor em memória de Jesus, lembrando sempre do que Ele fez para nos dar a tão grande vitória.</p>";
//__________________________________________________________________________________________________________________________________
const content3 = "<p>Queremos dar nesta lição respostas a algumas perguntas que são muito frequentes. Entre elas: Qual foi a primeira lgreja? Qual é a verdadeira lgreja?  Por que eu tenho que participar da Igreja? Por que não posso servir a Deus em casa?</p>" +
  "<p>Vamos, á luz das Escrituras, responder a cada uma destas perguntas:</p>" +
  "<p><strong>1. Quem fundou a Igreja?</strong></p>" +
  "<p>A Igreja nasceu no coraçao de Deus e seu fundador foi Jesus Cristo-Mateus 16.18.</p>" +
  "\n" +
  "Crsto é a Pedra onde a lgreja toi editicada e não Pedro. O próprio apóstolo\n" +
  "\n" +
  "odro reconhece essa verdade em Atos 4.11 e 1 Pedro 2.4-8.\n" +
  "\n" +
  "No Antigo Testamento temos o povo de Israel como nação escolhida de\n" +
  "\n" +
  "Deus. Deus se revelou a Israel para que lsrael O tornasse conhecido em toda\n" +
  "\n" +
  "a Terra.\n" +
  "\n" +
  "No Novo Testamento Deus uniu judeus e gentios (todo aquele que não é\n" +
  "\n" +
  "judeu é considerado gentio) por meio do sacrificio de Jesus e formou de am-\n" +
  "\n" +
  "bos os povos um só povo - Efésios 2.12-16.\n" +
  "\n" +
  "Apalavra lgreja vem do grego \"Eklesia\", que significa \"chamados para fora\n" +
  "\n" +
  "- indicando que os salvos são chamados para fora do sistema do mundo para\n" +
  "\n" +
  "formarem uma nova comunidade.\n" +
  "\n" +
  "2. Qual foi a primeira lgreja?\n" +
  "\n" +
  "Certamente não foi a de Roma, como argumentam os católicos romanos.\n" +
  "\n" +
  "Quando Deus olha para a Terra, Ele não vê igrejas, Ele vė uma lgreja, a Sua\n" +
  "\n" +
  "lgreja na Terra.\n" +
  "\n" +
  "Como comunidade local, a primeira igreja foi a de Jerusalém, que surgiu\n" +
  "\n" +
  "no dia de Pentecostes - Atos 1.12-14 e 2.1. A medida que o Evangelho foi se\n" +
  "\n" +
  "espalhando, iam surgindo novas igrejas: Samaria (Atos 8), Cesarėia (Atos\n" +
  "\n" +
  "10) e Antioquia da Siria (Atos 11). Depois, as viagens missionárias de Paulo\n" +
  "\n" +
  "Contribuiram grandemente para a expansão da lgreja.\n" +
  "\n" +
  "A lgreja é constituida de duas partes:\n" +
  "\n" +
  "Oe a lerra, e a lgreja triunfante os salvos que jâ partiram com o Senhor.\n" +
  "\n" +
  "va verdade, os salvos em Cristo que vivem em obediėncia à Palavra são a\n" +
  "\n" +
  "verdadeira lgreja Católica - Universal, Apostólica, isto é, que vive os ensinos\n" +
  "\n" +
  "dos apóstolos.\n" +
  "\n" +
  "greja militante - os salvos vivos";

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  options = new SelectionModel(
    false,
    [0]
  );

  lessonsList$ = signal<Lesson[]>([
    {
      id: 1,
      title: '1. O Batismo',
      questions: [
        {
          index: 1,
          question: 'O que significa a palavra batismo'
        },
        {
          index: 2,
          question: 'A forma bíblica do batismo, conforme o sentido etimológico da palavra é por: Im'
        },
        {
          index: 3,
          question: 'A fórmula ensinada por Jesus em Mateus 28.19 é: "Em nome do _______, do ________ e do ___________"'
        },
        {
          index: 4,
          question: 'Quais as condições para que uma pessoa seja batizada? Marcos 16.16 _____ Atos 2.38 _____ 1 João 1.9 _____ João 3.3 _____'
        },
        {
          index: 5,
          question: 'O batismo purifica pecados? Por qué?'
        },
        {
          index: 6,
          question: 'O batismo salva? Por que?'
        },
        {
          index: 7,
          question: 'Qual o valor do batismo? João 3:5 ____- Mateus 10:32 ____ Colossenses 2:12'
        },
        {
          index: 8,
          question: 'Por que não praticamos o batismo infantil? (responda con suas palavras)'
        }
      ],
      content: conteudo1
    },
    {
      id: 2,
      title: '2. A Ceia do Senhor',
      questions: [
        {
          index: 1,
          question: 'O que é a Ceia do Senhor segundo está em 1 Coríntios 11.23-32? - É com _______________ - É inst_______________ -É insp________________ -É anun _______________'
        },
        {
          index: 2,
          question: 'Quem pode participar da Ceia do Senhor? ______________________________________________________'
        },
        {
          index: 3,
          question: 'Quais as condições para o crente participar da Ceia do Senhor? -Com a vida em_______________ -Examinado-se a ____________________ -Discernindo o ______________'
        },
        {
          index: 4,
          question: "O que acontece quando se participa da Ceia do Senhor indignamente? (Leia 1 Corintios 11.30)_______________________________________________________________"
        },
        {
          index: 5,
          question: "Qual a forma que nós batistas usamos para celebrar a Ceia do Senhor? ________________________________________________________"
        },
        {
          index: 6,
          question: "Explique com suas palavras por que é importante o crente participar da Ceia do Senhor?____________________________________"
        }
      ],
      content: content2
    },
    {
      id: 3,
      title: '3. A igreja',
      questions: [],
      content: content3
    },
    {
      id: 4,
      title: '4. Conhecendo Nossa História',
      questions: [],
      content: ''
    },
    {
      id: 5,
      title: '5. O Alicerce de Nossa Fé',
      questions: [],
      content: ''
    },
    {
      id: 6,
      title: '6. Abandonando as Práticas da Velha Vida',
      questions: [],
      content: ''
    },
    {
      id: 7,
      title: '7. Princípios e Hábitos a Serem Cultivados',
      questions: [],
      content: ''
    },
    {
      id: 8,
      title: '8. A Vida Devocional do Cristão',
      questions: [],
      content: ''
    },
    {
      id: 9,
      title: '9. A Bênção da Contribuição',
      questions: [],
      content: ''
    },
    {
      id: 10,
      title: '10. Crescendo Sempre',
      questions: [],
      content: ''
    }
  ]);
  activeLesson = signal(this.lessonsList$()[0]);

  constructor() {}

  select(option: number): void {
    this.options.select(option);
    this.activeLesson.set(this.lessonsList$()[option]);
  }

  get(lessonIndex: number): Lesson | undefined {
    return this.lessonsList$().find(l => l.id === lessonIndex);
  }
}
