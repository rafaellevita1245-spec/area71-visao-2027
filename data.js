/* ==========================================================================
   ÁREA 71 · IEADAM — BASE DE CONTEÚDO E TEXTOS (2027)
   --------------------------------------------------------------------------
   Este arquivo concentra 100% dos textos, títulos, versículos, datas,
   redes, fases e checklists do portal.
   Quando quiser editar ou atualizar textos, basta alterar aqui — toda a
   estrutura visual, animações e interações continuam intactas.
   ========================================================================== */

window.AREA71_DATA = (function () {
  /* ------------------------------------------------------------------------
     1. METADADOS DO PORTAL
     ------------------------------------------------------------------------ */
  const SITE_META = {
    brandCode: '71',
    brandTitle: 'Área 71 · IEADAM',
    brandSubtitle: 'Núcleo 17 · Planejamento 2027',
    heroKicker: 'IEADAM · REDE NORTE · NÚCLEO 17',
    heroDisplayTop: 'ÁREA 71',
    heroDisplayBottom: 'VISÃO 2027',
    year: '2027'
  };

  /* ------------------------------------------------------------------------
     2. GRUPOS DE NAVEGAÇÃO
     ------------------------------------------------------------------------ */
  const NAV_GROUPS = [
    {
      id: 'arquitetura',
      label: 'Visão & Arquitetura',
      shortLabel: 'Arquitetura',
      ids: ['visao-geral', 'doze-portas', 'afiando-machado']
    },
    {
      id: 'redes',
      label: 'Redes & Gerações',
      shortLabel: 'Redes',
      ids: ['mulheres', 'jovens', 'homens', 'idosos', 'kids']
    },
    {
      id: 'pilares',
      label: 'Eventos & Pilares',
      shortLabel: 'Eventos',
      ids: ['louvor', 'celulas', 'ensino-oracao', 'intercessao']
    }
  ];

  /* ------------------------------------------------------------------------
     3. AS 12 PORTAS DE NEEMIAS (AGENDA ÁREA 71 — 2027)
     ------------------------------------------------------------------------ */
  const DOZE_PORTAS_2027 = [
    {
      num: '01',
      mes: 'Janeiro',
      mesCurto: 'JAN',
      tri: 1,
      porta: 'Porta das Ovelhas',
      foco: 'Escola "Afiando o Machado", consagração, jejum, entrega e primícias',
      frutoFiel: '09/01/2027',
      reuniaoMin: '06/01/2027',
      marcos: [
        'Campanha de Oração (12 dias): 04 a 15/01 · 10h–00h · Congregação 09',
        'Reunião de Pastores IEADAM: 20/01',
        'Escola "Afiando o Machado": 7 noites, 07 a 28/01 · 19h30–21h30 (seg e qui)'
      ],
      color: '#F59E0B',
      color2: '#EA580C',
      relatedPage: 'afiando-machado'
    },
    {
      num: '02',
      mes: 'Fevereiro',
      mesCurto: 'FEV',
      tri: 1,
      porta: 'Porta do Peixe',
      foco: 'Evangelismo, volta aos cargos, Retiro de Jovens',
      frutoFiel: '06/02/2027',
      reuniaoMin: '03/02/2027',
      marcos: [
        'Início da EBD 2027 (Revista 1 · Lição 1): 07/02',
        'Missão Somos Jovens – Núcleo 17: 20/02',
        'Retiro de Jovens (evitar Carnaval 05 a 09/02)'
      ],
      color: '#06B6D4',
      color2: '#2563EB',
      relatedPage: 'jovens'
    },
    {
      num: '03',
      mes: 'Março',
      mesCurto: 'MAR',
      tri: 1,
      porta: 'Porta do Vale',
      foco: 'Páscoa e Cruz — humildade, quebrantamento e redenção',
      frutoFiel: '06/03/2027',
      reuniaoMin: '03/03/2027',
      marcos: [
        'EBO / Conferência de Células (Auditório Canaã): 27/03',
        'Páscoa na Área 71: 28/03'
      ],
      color: '#F43F5E',
      color2: '#9F1239',
      relatedPage: 'celulas'
    },
    {
      num: '04',
      mes: 'Abril',
      mesCurto: 'ABR',
      tri: 2,
      porta: 'Porta Velha',
      foco: 'Doutrina com foco em adoração; Seminário de Louvor e Adoração',
      frutoFiel: '03/04/2027',
      reuniaoMin: '31/03/2027',
      marcos: [
        'Seminário de Louvor e Adoração (data em Abril a definir)',
        'Reunião de Pastores IEADAM: 21/04'
      ],
      color: '#8B5CF6',
      color2: '#4338CA',
      relatedPage: 'louvor'
    },
    {
      num: '05',
      mes: 'Maio',
      mesCurto: 'MAI',
      tri: 2,
      porta: 'Porta da Fonte',
      foco: 'Espírito Santo e Pentecostes — avivamento e dons',
      frutoFiel: '01/05/2027',
      reuniaoMin: '28/04/2027',
      marcos: [
        'Congresso de Homens IEADAM: 08/05',
        'EBD Aulão Revista 1: 09/05',
        'Pentecostes & Início Revista 2: 16/05'
      ],
      color: '#38BDF8',
      color2: '#4F46E5',
      relatedPage: 'homens'
    },
    {
      num: '06',
      mes: 'Junho',
      mesCurto: 'JUN',
      tri: 2,
      porta: 'Porta do Monturo',
      foco: 'Família, cura interior e perdão — limpeza da casa',
      frutoFiel: '05/06/2027',
      reuniaoMin: '02/06/2027',
      marcos: [
        'AGE CEADAM / EBO Estadual: 26/06',
        'Alinhamento das 5 Redes em Família e Cura Emocional'
      ],
      color: '#EC4899',
      color2: '#BE123C',
      relatedPage: 'mulheres'
    },
    {
      num: '07',
      mes: 'Julho',
      mesCurto: 'JUL',
      tri: 3,
      porta: 'Porta das Águas',
      foco: 'Palavra e mente renovada — lavagem pela Escritura',
      frutoFiel: '03/07/2027',
      reuniaoMin: '30/06/2027',
      marcos: [
        'Escola Bíblica de Férias (EBF Geral IEADAM): Julho inteiro',
        'Reunião de Pastores IEADAM: 21/07'
      ],
      color: '#14B8A6',
      color2: '#059669',
      relatedPage: 'kids'
    },
    {
      num: '08',
      mes: 'Agosto',
      mesCurto: 'AGO',
      tri: 3,
      porta: 'Porta dos Cavalos',
      foco: 'Batalha espiritual (Efésios 6:10-18) e campanha de guerra',
      frutoFiel: '07/08/2027',
      reuniaoMin: '04/08/2027',
      marcos: [
        'EBD Aulão Revista 2: 15/08 · Início Revista 3: 22/08',
        'Campanha de Batalha Espiritual (fechar antes de 28/08)',
        'Congresso de Mulheres IEADAM: 28/08'
      ],
      color: '#94A3B8',
      color2: '#475569',
      relatedPage: 'ensino-oracao'
    },
    {
      num: '09',
      mes: 'Setembro',
      mesCurto: 'SET',
      tri: 3,
      porta: 'Porta de Efraim',
      foco: 'Multiplicação de células — frutificação dobrada',
      frutoFiel: '04/09/2027',
      reuniaoMin: '01/09/2027',
      marcos: [
        'EBO (Capital e municípios): 18/09',
        'Pré-Congresso Jovem IEADAM: 25/09',
        'Culto Geral Núcleo 17 (Pr. Paulo Castro): 27/09'
      ],
      color: '#10B981',
      color2: '#0F766E',
      relatedPage: 'celulas'
    },
    {
      num: '10',
      mes: 'Outubro',
      mesCurto: 'OUT',
      tri: 4,
      porta: 'Porta da Guarda',
      foco: 'Proteção do lar e intercessão (mês propositalmente leve)',
      frutoFiel: '09/10/2027',
      reuniaoMin: '06/10/2027',
      marcos: [
        'Reunião de Pastores IEADAM: 20/10',
        'Foco em descanso estratégico, guarda da família e Geração 60+'
      ],
      color: '#D97706',
      color2: '#CA8A04',
      relatedPage: 'idosos'
    },
    {
      num: '11',
      mes: 'Novembro',
      mesCurto: 'NOV',
      tri: 4,
      porta: 'Porta de Mifcade',
      foco: 'Autoexame, prestação de contas e revisão de metas',
      frutoFiel: '06/11/2027 (a alinhar)',
      reuniaoMin: '03/11/2027',
      marcos: [
        'Congresso Somos Jovens IEADAM: 06/11 (alinhar com Fruto Fiel)',
        'EBD Aulão Rev. 3: 21/11 · Início Rev. 4: 28/11',
        'EBO e Culto Adm. / IEADAM 110 anos: 27/11'
      ],
      color: '#6366F1',
      color2: '#9333EA',
      relatedPage: 'jovens'
    },
    {
      num: '12',
      mes: 'Dezembro',
      mesCurto: 'DEZ',
      tri: 4,
      porta: 'Porta Oriental',
      foco: 'Glória do Rei, Maranata e entrega dos cargos',
      frutoFiel: '04/12/2027 (a alinhar)',
      reuniaoMin: '01/12/2027',
      marcos: [
        'Grande Batismo IEADAM: 04 ou 05/12 (alinhar com Fruto Fiel)',
        'Entrega dos Cargos da Área 71 (data em Dezembro a definir)'
      ],
      color: '#FBBF24',
      color2: '#D97706',
      relatedPage: 'visao-geral'
    }
  ];

  /* ------------------------------------------------------------------------
     4. MÉTRICAS E PENDÊNCIAS DA HOME
     ------------------------------------------------------------------------ */
  const HOME_METRICS = [
    {
      num: 12,
      suffix: '',
      label: 'Portas Temáticas',
      sub: 'Alinhamento mensal Jan–Dez',
      icon: 'door',
      accent: '#F0B94B',
      visual: 'bars-12'
    },
    {
      num: 5,
      suffix: '',
      label: 'Redes Geracionais',
      sub: 'Mulheres, Jovens, Homens, 60+ e Kids',
      icon: 'users',
      accent: '#F43F5E',
      visual: 'dots-5'
    },
    {
      num: 47,
      suffix: '',
      label: 'Domingos de EBD',
      sub: '4 Revistas + 3 Aulões de Conclusão',
      icon: 'book',
      accent: '#38BDF8',
      visual: 'wave'
    },
    {
      num: 12,
      suffix: '×',
      label: 'Meses de Fruto Fiel',
      sub: 'Reunião Ministerial + Consagração',
      icon: 'flame',
      accent: '#10B981',
      visual: 'pulse'
    }
  ];

  const PENDENCIAS_DATAS = [
    {
      evento: 'Escola "Afiando o Machado"',
      mes: 'Janeiro',
      obs: 'Datas e encaixe definidos (07 a 28/01). A Campanha segue todos os dias; a Escola acontece dentro dela nas noites 07, 11 e 14/01',
      targetPage: 'afiando-machado'
    },
    {
      evento: 'Retiro de Jovens',
      mes: 'Fevereiro',
      obs: 'Evitar 05 a 09/02 (Impacto Carnaval IEADAM)',
      targetPage: 'jovens'
    },
    {
      evento: 'Seminário de Louvor e Adoração',
      mes: 'Abril',
      obs: 'Porta Velha · Sugestão: 16–18/04 ou 23–25/04',
      targetPage: 'louvor'
    },
    {
      evento: 'Campanha de Batalha Espiritual',
      mes: 'Agosto',
      obs: 'Fechar antes do Congresso de Mulheres (28/08)',
      targetPage: 'ensino-oracao'
    },
    {
      evento: 'Vigília da Área 71',
      mes: 'A definir',
      obs: 'Exigência anual IEADAM · Sugestão: Maio ou Agosto',
      targetPage: 'ensino-oracao'
    },
    {
      evento: 'Entrega dos Cargos',
      mes: 'Dezembro',
      obs: 'Porta Oriental · Gratidão e transição 2028',
      targetPage: 'doze-portas'
    }
  ];

  const CONFLITOS_IEADAM = [
    {
      data: '04 a 15/01/2027 · Campanha de Oração',
      titulo: 'Campanha × Escola, Reunião do Ministério e Fruto Fiel',
      desc: 'Decidido: a Campanha (propósito inquebrável) segue todos os dias. Nas terças e domingos continua depois do culto de cada congregação; no Fruto Fiel (09/01) continua depois dele. Nas noites da Escola (07, 11 e 14/01) a Campanha segue normalmente. Falta só fechar o horário da Escola dentro do dia.',
      targetPage: 'afiando-machado'
    },
    {
      data: '06/11/2027 · Sábado',
      titulo: 'Fruto Fiel × Congresso Somos Jovens',
      desc: 'Alinhar horário (ex.: Fruto Fiel pela manhã ou antecipação) para liberar 100% da juventude ao Congresso IEADAM.',
      targetPage: 'jovens'
    },
    {
      data: '04/12/2027 · Sábado',
      titulo: 'Fruto Fiel × Grande Batismo IEADAM',
      desc: 'Grande Batismo previsto para 04 ou 05/12 (Ponta Negra, Áreas ou Núcleo). Sincronizar data exata para não dividir a equipe.',
      targetPage: 'celulas'
    }
  ];

  /* ------------------------------------------------------------------------
     5. AS 12 PÁGINAS COMPLETAS DO PORTAL (COM ASSINATURA VISUAL PRÓPRIA)
     ------------------------------------------------------------------------ */
  const PAGES = {
    'visao-geral': {
      id: 'visao-geral',
      chapterNum: '01',
      group: 'arquitetura',
      shortTitle: 'Visão Geral · Área 71',
      title: 'Área 71 · IEADAM — Visão & Projetos 2027',
      category: 'Visão & Arquitetura',
      icon: 'compass',
      theme: {
        accent: '#EAB308',
        accent2: '#F97316',
        rgb: '234, 179, 8',
        rgb2: '249, 115, 22',
        gradient: 'linear-gradient(125deg, #18181B 0%, #422006 42%, #D97706 84%, #0F172A 100%)'
      },
      subtitle: 'Uma Igreja Alinhada nas 12 Portas — Fortalecendo Lideranças, Cuidando de Gerações e Multiplicando Discípulos no Núcleo 17.',
      keywords: 'home inicio visao geral area 71 ieadam nucleo 17 2027 pendencias agenda planejamento',
      properties: [
        { label: 'Jurisdição', value: 'IEADAM · Rede Norte · Núcleo 17' },
        { label: 'Eixo Arquitetônico', value: 'As 12 Portas de Neemias (Jan a Dez 2027)' },
        { label: 'Abrangência', value: '5 Redes Geracionais + Células + Ensino + Louvor' },
        { label: 'Status do Plano', value: 'Em Alinhamento com a Liderança' }
      ],
      callout: {
        verse: '“Vinde, pois, e reedifiquemos o muro de Jerusalém, e não sejamos mais um opróbrio... E disseram: Levantemo-nos e edifiquemos. E esforçaram as suas mãos para o bem.”',
        ref: 'Neemias 2:17–18',
        note: 'Em 2027, nenhuma rede caminha isolada. Cada ministério constrói o seu trecho do muro conectado à mesma visão mensal, ao mesmo ritmo de oração e ao mesmo propósito de formar discípulos maduros.'
      },
      specialType: 'home',
      checklist: [
        'Apresentar o Portal Visão 2027 na reunião estratégica de liderança da Área 71',
        'Validar coordenadores-âncora para cada uma das 5 Redes Geracionais',
        'Definir as datas das ações pendentes (Retiro Jovem, Seminário de Louvor, Batalha Espiritual, Vigília e Entrega dos Cargos) e fechar o encaixe da Campanha com a Escola',
        'Alinhar com o Núcleo 17 os dois sábados de sobreposição (06/11 e 04/12)',
        'Publicar o calendário anual sincronizado nas congregações e células da Área 71'
      ]
    },

    'doze-portas': {
      id: 'doze-portas',
      chapterNum: '02',
      group: 'arquitetura',
      shortTitle: 'As 12 Portas · 2027',
      title: 'As 12 Portas · Arquitetura Mensal 2027',
      category: 'Visão & Arquitetura',
      icon: 'door',
      theme: {
        accent: '#F59E0B',
        accent2: '#F97316',
        rgb: '245, 158, 11',
        rgb2: '99, 102, 241',
        gradient: 'linear-gradient(125deg, #1E1B4B 0%, #312E81 36%, #B45309 78%, #09090B 100%)'
      },
      subtitle: 'Como um único eixo temático por mês sincroniza púlpito, Culto de Ensino, células e todas as 5 redes geracionais sem sobrecarregar a liderança.',
      keywords: '12 portas neemias janeiro fevereiro marco abril maio junho julho agosto setembro outubro novembro dezembro fruto fiel reuniao calendario',
      properties: [
        { label: 'Princípio de Gestão', value: 'Alinhamento Vertical (1 Tema → Toda a Igreja)' },
        { label: 'Ciclo Mensal Fixo', value: 'Reunião do Ministério (Qua) → Fruto Fiel (Sáb) → Ceia (Dom)' },
        { label: 'Total de Marcos', value: '12 Portas · 12 Frutos Fiéis · 47 Domingos de EBD' },
        { label: 'Mês de Respiro', value: 'Outubro · Porta da Guarda (mês leve intencional)' }
      ],
      callout: {
        verse: '“E ao lado deles reparou... cada um defronte da sua casa.”',
        ref: 'Neemias 3:28–30',
        note: 'O segredo da saúde ministerial não é multiplicar eventos desconexos, mas fazer todas as frentes falarem a mesma linguagem profética no mesmo mês.'
      },
      specialType: 'portas',
      toggles: [
        {
          title: 'Exemplo Prático de Alinhamento Vertical: Junho (Porta do Monturo — Família, Cura e Perdão)',
          badge: 'Modelo de Aplicação',
          content: `
            <ul class="space-y-2.5 text-sm">
              <li><strong>Púlpito & Culto de Ensino:</strong> Série sobre cura da alma, restauração do altar doméstico e perdão que liberta.</li>
              <li><strong>Rede de Homens:</strong> Abertura da Temporada 2 da Mentoria (<em>Marido Presente, Paternidade e Cura de Raízes</em>).</li>
              <li><strong>Rede de Mulheres:</strong> Noite de Perdão e Rodas de Cuidado Tito 2 focadas em cura emocional e casamento.</li>
              <li><strong>Rede de Jovens:</strong> Culto sobre honra aos pais, identidade e quebra de ciclos familiares tóxicos.</li>
              <li><strong>Rede Kids & Famílias:</strong> Oficina "Carta de Honra" e devocional doméstico em família (estratégia <em>Pense Laranja</em>).</li>
              <li><strong>Geração 60+:</strong> Encontro sobre reconciliação geracional e legado de bênçãos para filhos e netos.</li>
            </ul>
          `
        },
        {
          title: 'Cadência Fixa Mensal da Área 71 (O Relógio que Dá Paz ao Líder)',
          badge: 'Ritmo Pastoral',
          content: `
            <p class="text-sm mb-3">Toda a Área 71 opera sob um compasso previsível que evita improvisos de última hora:</p>
            <div class="inner-grid-2">
              <div class="inner-box">
                <div class="inner-box-title">1ª Quarta (antes do Fruto Fiel)</div>
                <p>Reunião do Ministério + 15 min de pílula contínua do "Afiando o Machado".</p>
              </div>
              <div class="inner-box">
                <div class="inner-box-title">1º Sábado do Mês</div>
                <p>Fruto Fiel — abertura profética da Porta do mês e consagração.</p>
              </div>
              <div class="inner-box">
                <div class="inner-box-title">1º Domingo do Mês</div>
                <p>EBD às 8h + Santa Ceia do Senhor à noite.</p>
              </div>
              <div class="inner-box">
                <div class="inner-box-title">Todas as Terças (19h30)</div>
                <p>Culto de Ensino da Palavra aprofundando a doutrina da Porta vigente.</p>
              </div>
            </div>
          `
        }
      ],
      checklist: [
        'Entregar o Guia Visual das 12 Portas para todos os pregadores e líderes de células',
        'Sincronizar o calendário de pautas das 5 Redes com os temas mensais',
        'Resolver a conciliação de 06/11 (Fruto Fiel vs Congresso Somos Jovens)',
        'Resolver a conciliação de 04/12 (Fruto Fiel vs Grande Batismo IEADAM)'
      ]
    },

    'afiando-machado': {
      id: 'afiando-machado',
      chapterNum: '03',
      group: 'arquitetura',
      shortTitle: 'Escola Afiando o Machado',
      title: 'Escola de Liderança "Afiando o Machado"',
      category: 'Visão & Arquitetura',
      icon: 'hammer',
      theme: {
        accent: '#F97316',
        accent2: '#F59E0B',
        rgb: '249, 115, 22',
        rgb2: '245, 158, 11',
        gradient: 'linear-gradient(125deg, #431407 0%, #9A3412 45%, #D97706 85%, #1C1917 100%)'
      },
      subtitle: 'Sete noites de janeiro (07 a 28/01, 19h30 às 21h30) para alinhar a visão, formar a liderança e apresentar as diretrizes gerais da Área para 2027. Segunda-feira reúne a Área toda; quinta-feira é por divisão.',
      keywords: 'afiando o machado escola lideranca janeiro porta das ovelhas eclesiastes segunda quinta 19h30 abertura mapa de lideranca visao celular redes diretrizes gerais consagracao fruto fiel campanha',
      properties: [
        { label: 'Mês-Âncora / Porta', value: 'Janeiro · Porta das Ovelhas' },
        { label: 'Calendário', value: '7 noites · Qui 07, Seg 11, Qui 14, Seg 18, Qui 21, Seg 25, Qui 28/01' },
        { label: 'Horário', value: '19h30 às 21h30' },
        { label: 'Regra da semana', value: 'Segunda = Área toda · Quinta = dinâmicas por divisão (exceção: abertura em 07/01)' },
        { label: 'Público-Alvo', value: 'Pastores, obreiros, líderes de célula, coordenadores de redes e candidatos a líder' },
        { label: 'Status 2027', value: 'Desenho aprovado · Campanha segue normalmente nos dias de Escola · horários finos a fechar' }
      ],
      callout: {
        verse: '“Se estiver embotado o ferro, e não se afiar o corte, então se deve redobrar a força; mas a sabedoria é excelente para dirigir.”',
        ref: 'Eclesiastes 10:10',
        note: 'O líder cansado muitas vezes não está trabalhando demais, está cortando com o machado cego. Janeiro é o mês de estruturar: afiar a visão, mapear quem serve e quem falta, e apresentar as diretrizes gerais para 2027.'
      },
      pillars: [
        {
          icon: 'flame',
          title: 'Coração no Altar (Caráter)',
          desc: 'Antes de cobrar metas, restaurar o primeiro amor, a vida devocional e a saúde de quem serve na linha de frente. Sem unção, a estrutura vira só técnica.'
        },
        {
          icon: 'users',
          title: 'Segunda: Área toda · Quinta: Divisões',
          desc: 'Nas segundas toda a Área 71 ouve a mesma visão. Nas quintas cada rede e ministério trabalha o seu tema em sala própria.'
        },
        {
          icon: 'target',
          title: 'Mapa de Liderança',
          desc: 'Janeiro é mês de estruturação: muitos ministérios ainda não têm líder. A escola mapeia as vagas e forma quem vai assumi-las.'
        },
        {
          icon: 'clock',
          title: 'Diretrizes gerais, sem entrega individual',
          desc: 'A Direção apresenta as diretrizes gerais da Área. Quem lidera cada setor é tratado em conversa individual com o pastor, fora da pauta. A consagração oficial da liderança, local e geral, acontece no primeiro Fruto Fiel de fevereiro.'
        }
      ],
      phasesTitle: 'As 7 Noites da Escola (19h30 às 21h30)',
      phases: [
        {
          tab: 'Aula 1 · Abertura',
          period: 'Qui 07/01 · 19h30–21h30',
          title: 'Reunião de Abertura: o Machado Afiado',
          summary: 'Público: Área toda (exceção à regra das quintas). Objetivo: explicar tudo o que vai acontecer, ministrar sobre a importância de a ferramenta estar afiada e pedir o compromisso de não faltar.',
          bullets: [
            'Começo: boas-vindas, oração e a pergunta da noite: por que uma escola de liderança agora?',
            'Meio, parte 1: apresentar as 7 noites, a regra segunda = Área toda e quinta = divisões, e o conceito da escola.',
            'Meio, parte 2: agenda, horários e frequência (regra de presença a definir pelo pastor).',
            'Meio, parte 3: ministração em Eclesiastes 10:10 e Neemias 3:1 (Porta das Ovelhas): a diferença entre ativismo e sabedoria que afia a ferramenta.',
            'Fim: pedir o compromisso de não faltar (cartão de compromisso) e ministração no altar.',
            'Atenção: esta noite cai dentro da Campanha de Oração (04 a 15/01). Encaixe a definir.'
          ]
        },
        {
          tab: 'Aula 2 · Visão do Ano',
          period: 'Seg 11/01 · 19h30–21h30',
          title: 'Caráter e Chamado do Líder + a Visão do Ano (12 Portas)',
          summary: 'Público: Área toda. Primeiro o coração do líder, depois o mapa do ano: as 12 Portas de Neemias mês a mês e onde cada rede aparece.',
          bullets: [
            'Caráter e chamado: quem é o líder diante de Deus antes de ser líder diante das pessoas.',
            'Neemias 2:17-18: levantar-se e edificar. As 12 Portas, o calendário 2027 e as datas-âncora da IEADAM.',
            'O papel de cada rede e ministério em cada Porta (visão geral, sem entrar ainda nos projetos).',
            'Entrega da noite: calendário 2027 na mão de cada líder.',
            'Atenção: noite dentro da Campanha de Oração (04 a 15/01). Encaixe a definir.'
          ]
        },
        {
          tab: 'Aula 3 · Mapa de Liderança',
          period: 'Qui 14/01 · 19h30–21h30',
          title: 'Mapa de Liderança por Rede e Ministério',
          summary: 'Público: por divisão, cada rede e ministério em uma sala. Objetivo: enxergar com honestidade quem serve hoje, quais funções estão vagas e quem pode ser levantado.',
          bullets: [
            'Pergunta 1: Quem temos hoje em cada função?',
            'Pergunta 2: Quais funções estão vagas (inclusive líder de intercessão e responsável por congregação)?',
            'Pergunta 3: Quem são os candidatos a líder em treinamento?',
            'Critério de escolha: Êxodo 18:21 (homens capazes, que temem a Deus, verdadeiros, inimigos da avareza), a base do modelo de Jetro.',
            'Resultado: a Direção chega ao dia 28 com o mapa completo para conversar individualmente com cada líder.',
            'Fim da noite: oração de consagração, na véspera do encerramento da Campanha (15/01).'
          ]
        },
        {
          tab: 'Aula 4 · Visão Celular',
          period: 'Seg 18/01 · 19h30–21h30',
          title: 'Visão Celular: Fundamento, Funções e Multiplicação',
          summary: 'Público: Área toda. Uma definição única de célula para a Área 71: o que é, o que não é, quem faz o quê e como a multiplicação acontece.',
          bullets: [
            'Fundamento: por que células (Atos 2:46, Êxodo 18), igreja em células ou igreja com células, célula e celebração.',
            'O que é e o que não é célula; tamanho, comunhão, multiplicação e serviço mútuo.',
            'Funções: líder, líder em treinamento, anfitrião, discipulador e pastor de rede.',
            'Ciclo de crescimento e formas de multiplicação, ligado à Porta de Efraim (Setembro).',
            'Base de leitura: Manual da Visão Celular (Aluízio Silva). É um modelo de referência: a Área 71 decide o que adota.'
          ]
        },
        {
          tab: 'Aula 5 · Homens e Mulheres',
          period: 'Qui 21/01 · 19h30–21h30',
          title: 'Noite das Redes I: Rede de Homens e Rede de Mulheres',
          summary: 'Público: por divisão, em duas salas paralelas. A Direção apresenta o conceito e o projeto de cada rede para 2027 e recolhe os ajustes.',
          bullets: [
            'Rede de Homens: conceito, projeto do ano e mês-chave (Porta da Fonte, Congresso de Homens IEADAM em 08/05).',
            'Rede de Mulheres: conceito, projeto do ano e mês-chave (Porta do Monturo em Junho; Congresso de Mulheres IEADAM em 28/08).',
            'Em cada sala: o que sabemos hoje, o que vamos construir no 1º semestre e quem lidera.',
            'Entrega: ajustes recolhidos de cada rede, para alimentar as diretrizes gerais.'
          ]
        },
        {
          tab: 'Aula 6 · Jovens, Louvor e 60+',
          period: 'Seg 25/01 · 19h30–21h30',
          title: 'Integração da Área + Jovens com Louvor e Dança',
          summary: 'Primeira hora com a Área toda; segunda hora por divisão, com Jovens e Louvor e Dança juntos.',
          bullets: [
            '19h30 às 20h30 (Área toda): integração das redes e apresentação do conceito da Rede dos Anciões (Geração 60+). Momento de honrar os mais velhos diante de todos.',
            '20h30 às 21h30 (divisão): Jovens e Louvor e Dança juntos. Conceito, projeto do ano e mês-chave de cada um (Jovens: Fevereiro, Setembro e Novembro; Louvor: Seminário na Porta Velha, em Abril).',
            'Entrega: ajustes recolhidos de Jovens e de Louvor e Dança.'
          ]
        },
        {
          tab: 'Aula 7 · Diretrizes e Envio',
          period: 'Qui 28/01 · 19h30–21h30',
          title: 'Diretrizes Gerais e Envio',
          summary: 'Sem entrega de direções individuais. O pastor passa as diretrizes gerais para 2027. As conversas individuais sobre quem sai ou permanece na liderança acontecem à parte e não entram na pauta. A consagração oficial da liderança, local e geral, é no primeiro Fruto Fiel de fevereiro.',
          bullets: [
            'Diretrizes gerais da Área 71 para 2027, para todos juntos.',
            'Janeiro é mês de estruturação: ministérios ainda sem líder serão tratados em conversa individual, não em plenário.',
            'Aviso: consagração oficial da liderança no primeiro Fruto Fiel de fevereiro (data a confirmar no calendário).',
            'Apresentação da Reassunção dos cargos a partir de 01/02.',
            'Consagração e oração de envio (ceia e imposição de mãos, a critério do pastor).'
          ]
        }
      ],
      toggles: [
        {
          title: 'Quadro das 7 Noites',
          badge: 'Visão rápida',
          content: `
            <div class="table-wrap">
              <table class="data-table">
                <thead><tr><th>Data</th><th>Público</th><th>Tema</th><th>Entrega da noite</th></tr></thead>
                <tbody>
                  <tr><td>Qui 07/01</td><td>Área toda</td><td>Abertura: o machado afiado</td><td>Compromisso assumido</td></tr>
                  <tr><td>Seg 11/01</td><td>Área toda</td><td>Caráter e chamado + visão do ano</td><td>Calendário 2027</td></tr>
                  <tr><td>Qui 14/01</td><td>Divisões</td><td>Mapa de liderança</td><td>Vagas e candidatos mapeados</td></tr>
                  <tr><td>Seg 18/01</td><td>Área toda</td><td>Visão celular</td><td>Definição única de célula</td></tr>
                  <tr><td>Qui 21/01</td><td>Divisões</td><td>Homens e Mulheres</td><td>Ajustes das duas redes</td></tr>
                  <tr><td>Seg 25/01</td><td>19h30 Área toda · 20h30 Jovens + Louvor e Dança</td><td>Integração, Anciões, Jovens e Louvor</td><td>Ajustes recolhidos</td></tr>
                  <tr><td>Qui 28/01</td><td>Área toda</td><td>Diretrizes gerais e envio</td><td>Todos alinhados; consagração em fevereiro</td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          title: 'Estratégia por Setor (rascunho para definição)',
          badge: 'Redes e Ministérios',
          content: `
            <p class="text-sm mb-2">Cada setor chega ao dia 28 com a mesma ficha: conceito, projeto de 2027, mês-chave e liderança. Os conceitos abaixo são os que já estão no portal; o que muda é decidido pelo pastor.</p>
            <div class="table-wrap">
              <table class="data-table">
                <thead><tr><th>Setor</th><th>Conceito de partida (portal)</th><th>Noite</th><th>Mês-chave</th></tr></thead>
                <tbody>
                  <tr><td><strong>Homens</strong></td><td>Despertar homens da passividade espiritual: sacerdócio do lar, integridade e liderança no Reino.</td><td>21/01</td><td>Maio · Congresso de Homens (08/05)</td></tr>
                  <tr><td><strong>Mulheres</strong></td><td>Mulheres curadas, firmes na Palavra, intercessoras pelo lar e discipuladoras (mentoria Tito 2).</td><td>21/01</td><td>Junho (Porta do Monturo) · Congresso 28/08</td></tr>
                  <tr><td><strong>Jovens</strong></td><td>Geração apaixonada por Jesus, biblicamente sólida, comprometida com evangelismo, células e serviço.</td><td>25/01</td><td>Fev, Set e Nov</td></tr>
                  <tr><td><strong>Louvor e Dança</strong></td><td>Resgatar a essência bíblica da adoração: doutrina, santidade no altar e excelência técnica.</td><td>25/01</td><td>Abril · Seminário de Louvor</td></tr>
                  <tr><td><strong>Geração 60+ (Anciões)</strong></td><td>Honrar, cuidar e ativar os mais velhos como guardiões de oração, sabedoria e mentoria.</td><td>25/01 (conceito)</td><td>Jun a Set · Torre de Intercessão</td></tr>
                  <tr><td><strong>Kids e Famílias</strong></td><td>Crianças apaixonadas por Jesus: a luz da igreja unida ao amor da família.</td><td>A definir</td><td>Julho · EBF</td></tr>
                  <tr><td><strong>Intercessão</strong></td><td>Ministério transversal que sustenta todas as redes (veja o capítulo 12).</td><td>14/01 (liderança)</td><td>Janeiro e Agosto · Campanhas</td></tr>
                  <tr><td><strong>Células</strong></td><td>Evangelismo relacional, retenção em 48 horas e multiplicação saudável.</td><td>18/01</td><td>Março e Setembro</td></tr>
                </tbody>
              </table>
            </div>
            <p class="text-xs muted-note mt-2">Pendência: onde entra a Rede de Kids e Famílias nas quintas (07 e 14/01 foram reorganizadas).</p>
          `
        },
        {
          title: 'Estrutura de Liderança: Redes, Ministérios e Células',
          badge: 'Distribuição',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>Redes (por público):</strong> Homens, Mulheres, Jovens, Kids e Famílias, Geração 60+. Um líder por rede.</li>
              <li><strong>Ministérios (por função):</strong> Louvor e Dança, Intercessão e os demais que o pastor definir. Um líder por ministério.</li>
              <li><strong>Células (nas casas):</strong> líder, líder em treinamento, anfitrião, discipulador e pastor de rede.</li>
              <li><strong>Intercessão é transversal:</strong> atravessa todas as redes e as congregações. Proposta: um líder de intercessão da Área e um responsável por congregação.</li>
            </ul>
            <p class="text-xs muted-note mt-2">Decisão pendente: um líder de intercessão único para a Área ou um por congregação com coordenador acima.</p>
          `
        },
        {
          title: 'Roteiro da Noite de Abertura (07/01) com tempos',
          badge: 'Proposta',
          content: `
            <ol class="space-y-1.5 text-sm list-decimal pl-5">
              <li><strong>19h30 · Acolhimento e oração</strong> (10 min).</li>
              <li><strong>19h40 · Por que uma escola de liderança agora?</strong> O conceito de Afiando o Machado (15 min).</li>
              <li><strong>19h55 · As 7 noites, a agenda e a frequência:</strong> segunda = Área toda, quinta = divisões (20 min).</li>
              <li><strong>20h15 · Pausa de comunhão</strong> (10 min).</li>
              <li><strong>20h25 · Ministração:</strong> a ferramenta precisa estar afiada, com Eclesiastes 10:10 e Neemias 3:1 (35 min).</li>
              <li><strong>21h00 · Compromisso:</strong> cartão de compromisso e pedido de presença (15 min).</li>
              <li><strong>21h15 · Altar:</strong> oração e consagração (15 min).</li>
            </ol>
            <p class="text-xs muted-note mt-2">Os tempos são uma sugestão. Se a noite acontecer dentro da Campanha, ajustar ao horário combinado com a Congregação 09.</p>
          `
        },
        {
          title: 'Frequência e Compromisso (decisões do pastor)',
          badge: 'Decisão',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li>Presença mínima para receber função na estrutura de 2027 (sugestão a avaliar: 5 das 7 noites).</li>
              <li>Registro de presença por noite (lista ou cartão).</li>
              <li>Cartão de Compromisso assinado na abertura (07/01).</li>
              <li>Como tratar quem faltar: acompanhamento pelo discipulador ou pastor de rede.</li>
            </ul>
          `
        },
        {
          title: 'Campanha de Oração × Escola: choques de agenda',
          badge: 'Decidido',
          content: `
            <p class="text-sm mb-2">A Campanha de Oração vai de <strong>04 a 15/01</strong>, todos os dias, das 10h à meia-noite (a princípio), na Congregação 09. Terça e domingo há culto em cada congregação local. Caem dentro dela:</p>
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li>Reunião do Ministério: <strong>06/01</strong></li>
              <li>Aula 1 (abertura): <strong>07/01</strong></li>
              <li>Fruto Fiel: <strong>09/01</strong></li>
              <li>Aula 2: <strong>11/01</strong></li>
              <li>Aula 3 (Mapa de Liderança): <strong>14/01</strong></li>
            </ul>
            <p class="text-sm mt-2"><strong>Decidido:</strong> a Campanha é um propósito inquebrável e segue normalmente. Nas terças e domingos ela continua depois do culto de cada congregação; no Fruto Fiel (09/01), depois do Fruto Fiel; nas noites da Escola, a Campanha segue e a Escola entra no dia (a confirmar o encaixe do horário das 19h30).</p>
          `
        },
        {
          title: 'Pílula Mensal "Afiando o Machado" (15 min na Reunião do Ministério)',
          badge: 'Continuidade',
          content: `
            <ol class="space-y-1.5 text-sm list-decimal pl-5">
              <li><strong>5 min · Celebração:</strong> um testemunho real de transformação ou multiplicação do mês anterior.</li>
              <li><strong>5 min · Ferramenta:</strong> uma dica prática de liderança, cuidado pastoral ou evangelismo alinhada à Porta do mês.</li>
              <li><strong>5 min · Painel:</strong> checagem das datas do mês e oração pelas redes em destaque.</li>
            </ol>
          `
        },
        {
          title: 'Bases de Leitura (biblioteca de estudos)',
          badge: 'Fontes',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>Lido e usado:</strong> Manual da Visão Celular (Aluízio Silva), para as aulas 4 e de estrutura de liderança.</li>
              <li><strong>Na biblioteca, ainda a ler para as redes:</strong> Homem ao Máximo (Edwin Louis Cole), O Poder da Mulher que Ora (Stormie Omartian), Liderança Espiritual (J. Oswald Sanders), A Segunda Reforma (William A. Beckham), Igreja Simples (Rainer e Geiger).</li>
            </ul>
            <p class="text-xs muted-note mt-2">Os modelos dos livros são referência. A decisão teológica e a adoção são da liderança da Área 71.</p>
          `
        }
      ],
      checklist: [
        'Fechar o horário da Escola dentro do dia da Campanha (07, 11 e 14/01), que segue normalmente',
        'Conversar individualmente com cada líder antes da consagração (primeiro Fruto Fiel de fevereiro)',
        'Definir onde entra a Rede de Kids e Famílias nas quintas',
        'Definir a regra de frequência e preparar o Cartão de Compromisso (07/01)',
        'Definir quem ministra cada noite (Direção ou líderes de rede)',
        'Preparar a ficha de direção por setor: conceito, projeto 2027, mês-chave e liderança',
        'Montar a planilha do Mapa de Liderança para as salas de 14/01',
        'Criar grupo ou canal de envio do resumo pós-escola para toda a liderança'
      ]
    },

    'mulheres': {
      id: 'mulheres',
      chapterNum: '04',
      group: 'redes',
      shortTitle: 'Rede de Mulheres',
      title: 'Mulheres de Propósito · Rede Feminina Área 71',
      category: 'Redes & Gerações',
      icon: 'heart',
      theme: {
        accent: '#F43F5E',
        accent2: '#EC4899',
        rgb: '244, 63, 94',
        rgb2: '236, 72, 153',
        gradient: 'linear-gradient(125deg, #4C0519 0%, #881337 38%, #BE185D 72%, #D4A13B 100%)'
      },
      subtitle: 'Formar mulheres curadas emocionalmente, firmes na Palavra, intercessoras pelo lar e discipuladoras de outras mulheres através da mentoria Tito 2.',
      keywords: 'mulheres rede feminina culto mulheres proposito cura emocional tito 2 mentoria congresso mulheres 28 agosto porta monturo guarda',
      properties: [
        { label: 'Nome-Conceito (Proposta)', value: 'Mulheres de Propósito · Área 71' },
        { label: 'Meses-Âncora 2027', value: 'Junho (Porta do Monturo) · Agosto (Congresso) · Outubro (Guarda)' },
        { label: 'Marco IEADAM', value: 'Congresso de Mulheres IEADAM — 28/08/2027' },
        { label: 'Cadência Sugerida', value: 'Culto Bimestral + Rodas Tito 2 em Ciclos + Células Femininas' }
      ],
      callout: {
        verse: '“As mulheres idosas, semelhantemente... mestras do bem, para que ensinem as mulheres novas a serem prudentes, a amarem seus maridos, a amarem seus filhos...”',
        ref: 'Tito 2:3–5',
        note: 'A Rede de Mulheres da Área 71 vai muito além de chás festivos: é uma casa de cura, identidade em Cristo e mentoria intergeracional onde mulheres maduras estendem a mão para jovens casadas, mães e solteiras.'
      },
      pillars: [
        {
          icon: 'sparkles',
          title: 'Culto de Mulheres com Profundidade',
          desc: 'Encontros bimestrais ou trimestrais com atmosfera acolhedora, adoração íntima, palavra bíblica transformadora, testemunho real e ministração.'
        },
        {
          icon: 'users',
          title: 'Rodas de Cuidado & Mentoria Tito 2',
          desc: 'Ciclos curtos de 8 semanas conectando mulheres maduras na fé com recém-casadas, mães de primeira viagem, solteiras e mulheres em recomeço.'
        },
        {
          icon: 'network',
          title: 'Células Femininas & de Afinidade',
          desc: 'Pequenos grupos que furam bolhas: célula de mães (em horário escolar), célula de empreendedoras e célula de jovens mulheres.'
        },
        {
          icon: 'shield',
          title: 'Mães & Esposas Intercessoras',
          desc: 'Frente de oração estratégica pelos lares, maridos e filhos, com pico especial na Porta da Guarda (Outubro).'
        }
      ],
      phasesTitle: 'Jornada Anual da Rede de Mulheres (4 Fases · 2027)',
      phases: [
        {
          tab: 'Fase 1 · Identidade',
          period: 'Jan – Mar · Alinhamento',
          title: 'Fundamentos, Equipe e 1º Culto de Mulheres',
          summary: 'Estruturação da coordenação feminina na Escola Afiando o Machado e abertura da visão anual com identidade em Cristo.',
          bullets: [
            'Formação da equipe núcleo (Coordenação, Acolhimento, Intercessão, Mentoria e Eventos).',
            'Mapeamento das mulheres da Área 71 por perfil (solteiras, casadas, mães, empreendedoras, viúvas).',
            'Realização do 1º Culto de Mulheres em Março (alinhado à Porta do Vale — cura na Cruz).'
          ]
        },
        {
          tab: 'Fase 2 · Cura & Família',
          period: 'Abr – Jun · Porta do Monturo',
          title: 'Ciclo de Cura Interior, Perdão e Rodas Tito 2',
          summary: 'Aproveitamento máximo da Porta do Monturo (Junho) para tratar feridas emocionais, restaurar casamentos e lançar a 1ª turma de Mentoria.',
          bullets: [
            'Lançamento do 1º Ciclo de Rodas de Cuidado Tito 2 (8 semanas, grupos de 6 a 8 mulheres).',
            'Noite Especial "Coração Livre" em Junho: perdão, cura de traumas e restauração da autoestima bíblica.',
            'Abertura das primeiras 2 Células Femininas de Afinidade (ex.: Mães e Empreendedoras).'
          ]
        },
        {
          tab: 'Fase 3 · Mobilização',
          period: 'Jul – Set · Congresso 28/08',
          title: 'Esquenta Espiritual e Caravana ao Congresso IEADAM',
          summary: 'Engajamento total da Área 71 para o Congresso de Mulheres IEADAM (28/08) conectado à Batalha Espiritual de Agosto.',
          bullets: [
            'Encerramento da Campanha de Batalha Espiritual da Área 71 antes do dia 28/08 com participação ativa das mulheres.',
            'Organização de caravana, identidade visual/camisas e apadrinhamento de mulheres sem condições financeiras para o Congresso (28/08).',
            'Encontro Pós-Congresso em Setembro (Porta de Efraim) para transformar o impacto em discipulado nas células.'
          ]
        },
        {
          tab: 'Fase 4 · Legado',
          period: 'Out – Dez · Multiplicação',
          title: 'Guarda do Lar, Ação Social e Formação de Novas Mentorias',
          summary: 'Consolidação da cultura de oração pelo lar e formatura das mulheres que serão mentoras em 2028.',
          bullets: [
            'Outubro (Porta da Guarda): 21 dias de oração "Mulheres que Guardam o Lar" com devocional diário no WhatsApp.',
            'Ação Social Feminina de fim de ano (ex.: cestas, enxoval para gestantes ou cuidado com mães solo da comunidade).',
            'Chá de Gratidão e Comissionamento das novas mentoras Tito 2 para 2028.'
          ]
        }
      ],
      toggles: [
        {
          title: 'Roteiro-Modelo do Culto de Mulheres (Duração: 1h45 — Dinâmico e Profundo)',
          badge: 'Guia Prático',
          content: `
            <ol class="space-y-2 text-sm list-decimal pl-5">
              <li><strong>Recepção Intencional (20 min antes):</strong> Música ambiente suave, chá/água saborizada, cartão de boas-vindas com frase profética e equipe treinada para acolher visitantes sozinhas.</li>
              <li><strong>Abertura & Adoração Íntima (25 min):</strong> Louvor conduzido com sensibilidade e entrega (sem pressa e sem formalismo frio).</li>
              <li><strong>Momento "História Real" (10 min):</strong> Entrevista curta ou testemunho de uma mulher da própria Área 71 sobre superação, fé ou resposta de oração (gera identificação imediata).</li>
              <li><strong>Palavra Temática (35 min):</strong> Mensagem bíblica clara, aplicável à rotina real da mulher, alinhada à Porta do mês.</li>
              <li><strong>Ministração & Oração em Duplas (20 min):</strong> Momento de altar e oração umas pelas outras.</li>
              <li><strong>Comunhão & Convite Próximo Passo (15 min):</strong> Mesa de comunhão simples + mesa de inscrição para Rodas Tito 2 e Células Femininas.</li>
            </ol>
          `
        },
        {
          title: 'Organograma da Equipe da Rede de Mulheres (5 Frentes)',
          badge: 'Estrutura',
          content: `
            <div class="inner-grid-2">
              <div class="inner-box">
                <div class="inner-box-title">1. Coordenação Geral</div>
                <p>Alinha visão com o pastor da Área 71, calendário e pastoreio das líderes.</p>
              </div>
              <div class="inner-box">
                <div class="inner-box-title">2. Acolhimento & Retenção</div>
                <p>Recepciona visitantes e envia mensagem em até 48h convidando para uma célula.</p>
              </div>
              <div class="inner-box">
                <div class="inner-box-title">3. Mentoria Tito 2</div>
                <p>Seleciona mentoras maduras, forma duplas/rodas e acompanha o roteiro de 8 semanas.</p>
              </div>
              <div class="inner-box">
                <div class="inner-box-title">4. Intercessão & Cuidado</div>
                <p>Sustenta a rede em oração, acompanha gestantes, enlutadas e irmãs adoecidas.</p>
              </div>
              <div class="inner-box inner-box-full">
                <div class="inner-box-title">5. Eventos, Comunicação & Hospitalidade</div>
                <p>Cuida da estética dos encontros, divulgação sensível, fotos e organização da caravana do Congresso de 28/08.</p>
              </div>
            </div>
          `
        },
        {
          title: 'Sugestão de Temas para as Rodas de Mentoria Tito 2 (Ciclo de 8 Semanas)',
          badge: 'Conteúdo',
          content: `
            <ul class="inner-list-2">
              <li>Semana 1: Quem sou eu em Cristo (Identidade)</li>
              <li>Semana 2: Curando memórias e exercitando o perdão</li>
              <li>Semana 3: Saúde emocional, ansiedade e descanso em Deus</li>
              <li>Semana 4: Comunicação sábia que edifica a casa</li>
              <li>Semana 5: Vida de oração prática na rotina corrida</li>
              <li>Semana 6: Maternidade, casamento e solteirice com propósito</li>
              <li>Semana 7: Amizades saudáveis e perdão entre mulheres</li>
              <li>Semana 8: Meu chamado: servindo na igreja e na comunidade</li>
            </ul>
          `
        }
      ],
      checklist: [
        'Validar o nome oficial e a equipe coordenadora das 5 frentes femininas',
        'Fixar no calendário 2027 as datas dos Cultos de Mulheres (bimestrais/trimestrais)',
        'Selecionar e treinar as primeiras 6 a 10 mentoras maduras para as Rodas Tito 2',
        'Incluir oficialmente o Congresso de Mulheres (28/08) no calendário da Área 71 e abrir lista de caravana em Junho',
        'Criar o roteiro devocional "21 Dias Guardando o Lar" para Outubro (Porta da Guarda)'
      ]
    },

    'jovens': {
      id: 'jovens',
      chapterNum: '05',
      group: 'redes',
      shortTitle: 'Rede de Jovens',
      title: 'Fogo no Altar, Pés na Missão · Rede de Jovens 2027',
      category: 'Redes & Gerações',
      icon: 'flame',
      theme: {
        accent: '#818CF8',
        accent2: '#F97316',
        rgb: '129, 140, 248',
        rgb2: '249, 115, 22',
        gradient: 'linear-gradient(125deg, #1E1B4B 0%, #4338CA 42%, #EA580C 82%, #F59E0B 100%)'
      },
      subtitle: 'Levantar uma geração apaixonada por Jesus, biblicamente sólida, relevante na cultura e comprometida com evangelismo, células e serviço.',
      keywords: 'jovens rede jovens fogo no altar pes na missao retiro jovens fevereiro somos jovens nucleo 17 20 fevereiro pre congresso 25 setembro congresso 6 novembro',
      properties: [
        { label: 'Tema Proposto 2027', value: 'Fogo no Altar, Pés na Missão (1 Tm 4:12)' },
        { label: 'Marcos Nucleares', value: 'Retiro (Fev) · Núcleo 17 (20/02) · Pré-Congresso (25/09) · Congresso (06/11)' },
        { label: 'Atenção de Agenda', value: 'Retiro evitando 05–09/02 · Alinhar 06/11 com Fruto Fiel' },
        { label: 'Público-Alvo', value: 'Adolescentes maduros, Jovens universitários e Jovens adultos' }
      ],
      callout: {
        verse: '“Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis, na palavra, no trato, na caridade, no espírito, na fé, na pureza.”',
        ref: '1 Timóteo 4:12',
        note: 'Jovens não ficam na igreja apenas por luzes e música alta — ficam onde encontram verdade sem máscaras, amigos de verdade, propósito maior que eles mesmos e espaço real para liderar.'
      },
      pillars: [
        {
          icon: 'flame',
          title: 'Culto Jovem Mensal',
          desc: 'Linguagem atual com profundidade bíblica real: louvor intenso, pregação expositiva aplicada a dilemas da geração e mesa de acolhimento pós-culto.'
        },
        {
          icon: 'network',
          title: 'Células Jovens & de Afinidade',
          desc: 'Além das células por bairro, grupos temáticos: universitários, esportes/corrida, música/mídia e criatividade — furando bolhas fora da igreja.'
        },
        {
          icon: 'users',
          title: 'Discipulado 1-a-1 & Novos Convertidos',
          desc: 'Todo jovem que aceita a Jesus recebe um "irmão mais velho na fé" nas primeiras 48h para caminhar junto até o batismo em Dezembro.'
        },
        {
          icon: 'compass',
          title: 'Frente Missionária & Ponte 60+',
          desc: 'Ações evangelísticas urbanas, impacto social e parceria intergeracional: jovens ensinam tecnologia aos 60+ e recebem sabedoria e oração.'
        }
      ],
      phasesTitle: 'Jornada Sequencial da Rede de Jovens (4 Fases · 2027)',
      phases: [
        {
          tab: 'Fase 1 · Despertar',
          period: 'Jan – Mar · Retiro & Núcleo 17',
          title: 'Alinhamento, Retiro de Jovens e Missão Somos Jovens',
          summary: 'Começar o ano incendiando a juventude com encontro profundo com Deus e unidade com o Núcleo 17.',
          bullets: [
            'Janeiro: Lançamento da visão na Escola Afiando o Machado + recrutamento de líderes de células jovens.',
            'Fevereiro (data fora de 05 a 09/02): Retiro de Jovens da Área 71 ("Fogo no Altar") — 2 ou 3 dias de imersão, cura e chamado.',
            '20/02/2027: Mobilização máxima da Área 71 na Missão Somos Jovens (Rede Norte · Núcleo 17).',
            'Março: Culto de Páscoa Jovem focado na Cruz e início das inscrições de discipulado.'
          ]
        },
        {
          tab: 'Fase 2 · Raízes',
          period: 'Abr – Jun · Células & Doutrina',
          title: 'Consolidação em Células, Adoração e Identidade',
          summary: 'Transformar a emoção do retiro em hábitos espirituais diários, envolvimento no louvor/mídia e grupos pequenos fortes.',
          bullets: [
            'Abril: Integração massiva dos jovens músicos e equipe de mídia no Seminário de Louvor e Adoração.',
            'Maio (Porta da Fonte): Noite de Pentecostes Jovem — busca pelo batismo no Espírito Santo e dons espirituais.',
            'Junho (Porta do Monturo): Série "Sem Máscaras" — saúde mental, pureza, namoro cristão e cura familiar.',
            'Abertura de pelo menos 2 Células Jovens de Afinidade (ex.: Esporte/Futebol ou Universitários).'
          ]
        },
        {
          tab: 'Fase 3 · Expansão',
          period: 'Jul – Set · Multiplicação & Pré-Congresso',
          title: 'Missão Urbana, Multiplicação e Pré-Congresso (25/09)',
          summary: 'Colocar os pés na missão: evangelismo criativo nas escolas/faculdades, multiplicação de células e aquecimento para o congresso.',
          bullets: [
            'Julho: Voluntariado jovem apoiando a EBF das crianças + ações criativas de férias.',
            'Agosto (Porta dos Cavalos): Treinamento de Batalha Espiritual na mente e nas redes sociais.',
            'Setembro (Porta de Efraim): Campanha "Cada Jovem Ganha Um" com meta de multiplicação de células jovens.',
            '25/09/2027: Participação forte no Pré-Congresso Jovem IEADAM.'
          ]
        },
        {
          tab: 'Fase 4 · Colheita',
          period: 'Out – Dez · Congresso & Batismo',
          title: 'Congresso Somos Jovens (06/11), Envio e Grande Batismo',
          summary: 'Colher os frutos do ano no grande congresso, celebrar batismos e comissionar a nova geração de líderes.',
          bullets: [
            'Outubro: Projeto "Conexão Digital" — jovens da Área 71 promovem tarde de auxílio tecnológico para a Geração 60+.',
            '06/11/2027: Caravana da Área 71 no Congresso Somos Jovens IEADAM (alinhar horário com Fruto Fiel).',
            '04 ou 05/12/2027: Apresentação da safra de jovens novos convertidos no Grande Batismo IEADAM.',
            'Dezembro: Culto de Gratidão, prestação de contas e envio de novos líderes auxiliares para 2028.'
          ]
        }
      ],
      toggles: [
        {
          title: 'Projeto do Retiro de Jovens (Fevereiro 2027 — Fora do Carnaval)',
          badge: 'Evento Prioritário',
          content: `
            <div class="space-y-2.5 text-sm">
              <p><strong>Regra de Agenda:</strong> Evitar <strong>05 a 09/02/2027</strong> (Impacto Evangelístico no Carnaval da IEADAM). <strong>Janela recomendada:</strong> 12 a 14/02 ou 26 a 28/02/2027 (sexta noite a domingo tarde).</p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>Objetivo Central:</strong> Quebrar a frieza espiritual, gerar vínculos profundos de amizade cristã e lançar os jovens nas células.</li>
                <li><strong>Formato:</strong> 4 plenárias (Altar, Identidade, Pureza/Propósito e Missão), 2 oficinas práticas, gincana de integração e noite de fogueira/consagração.</li>
                <li><strong>Sustentabilidade Financeira:</strong> Inscrição em 3 lotes + fundo de bolsas ("Adote um Jovem" patrocinado por irmãos da Área 71) para ninguém ficar de fora por falta de recursos.</li>
              </ul>
            </div>
          `
        },
        {
          title: 'Anatomia do Culto Jovem Mensal (Relevância + Reverência)',
          badge: 'Modelo de Culto',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>Pré-culto (30 min):</strong> Área de convivência com música, café/pipoca e equipe de "conectores" buscando quem chegou sozinho.</li>
              <li><strong>Louvor & Oração (30 min):</strong> Sem pressa, com direção espiritual firme (não apenas show).</li>
              <li><strong>Dinâmica / Vídeo Curto ou Entrevista (10 min):</strong> Conecta a Palavra à vida real (faculdade, trabalho, ansiedade, redes sociais).</li>
              <li><strong>Palavra Bíblica Direta (35 min):</strong> Exposição clara com apelo objetivo para Cristo ou reconexão.</li>
              <li><strong>Pós-culto "After de Comunhão" (30 min):</strong> Ninguém vai embora correndo — lanchonete solidária que ajuda a financiar o Retiro e as Missões.</li>
            </ul>
          `
        },
        {
          title: 'Ponte Intergeracional: Jovens + Geração 60+',
          badge: 'Inovação Área 71',
          content: `
            <p class="text-sm">Duas vezes por semestre, a Rede de Jovens e a Geração 60+ realizam um sábado à tarde juntos:</p>
            <ul class="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Estação Digital:</strong> Jovens ajudam os idosos com WhatsApp, Bíblia no celular, segurança contra golpes digitais e fotos da família.</li>
              <li><strong>Estação Sabedoria:</strong> Os 60+ compartilham testemunhos de fidelidade de Deus em décadas de caminhada e impõem as mãos orando pela vocação e futuro dos jovens.</li>
            </ul>
          `
        }
      ],
      checklist: [
        'Definir a data exata do Retiro de Jovens em Fevereiro (fora de 05–09/02) e reservar o local',
        'Organizar a caravana da Área 71 para a Missão Somos Jovens do Núcleo 17 (20/02)',
        'Montar o calendário dos 10 Cultos Jovens mensais e equipe de mídia/comunicação',
        'Lançar o sistema de apadrinhamento de novos convertidos (contato em 48h)',
        'Alinhar com a liderança da Área 71 a agenda de 06/11 (Fruto Fiel vs Congresso Somos Jovens)'
      ]
    },

    'homens': {
      id: 'homens',
      chapterNum: '06',
      group: 'redes',
      shortTitle: 'Rede de Homens',
      title: 'Homens de Honra · Sacerdócio, Integridade e Mentoria',
      category: 'Redes & Gerações',
      icon: 'shield',
      theme: {
        accent: '#38BDF8',
        accent2: '#D4A13B',
        rgb: '56, 189, 248',
        rgb2: '212, 161, 59',
        gradient: 'linear-gradient(125deg, #0F172A 0%, #1E293B 40%, #0F4C5C 75%, #9A6B2F 100%)'
      },
      subtitle: 'Despertar homens da passividade espiritual para assumirem com coragem o sacerdócio do lar, a integridade no trabalho e a liderança no Reino.',
      keywords: 'homens rede homens mentoria homens temporadas cafe homens trios prestacao contas congresso homens 8 maio terceiros lugares',
      properties: [
        { label: 'Projeto Central', value: 'Mentoria com Homens (3 Temporadas de 6–8 Semanas)' },
        { label: 'Marco IEADAM', value: 'Congresso de Homens IEADAM — 08/05/2027' },
        { label: 'Horário-Chave', value: 'Café dos Homens (Sábados 6h30–8h30) + Trios Semanais' },
        { label: 'Status 2027', value: 'Projeto pronto para validação e lançamento em Março' }
      ],
      callout: {
        verse: '“Vigiai, estai firmes na fé; portai-vos varonilmente, e fortalecei-vos. Todas as vossas coisas sejam feitas com amor.”',
        ref: '1 Coríntios 16:13–14',
        note: 'Homens fogem de compromissos genéricos e sem fim, mas abraçam com lealdade desafios claros, linguagem objetiva, fraternidade verdadeira e ciclos curtos com resultados práticos na família.'
      },
      pillars: [
        {
          icon: 'target',
          title: 'Mentoria em Temporadas Curtas',
          desc: 'Ciclos objetivos de 6 a 8 semanas com começo, meio e fim, material direto ao ponto e desafios semanais mensuráveis em casa.'
        },
        {
          icon: 'clock',
          title: 'Café dos Homens (6h30 às 8h30)',
          desc: 'Encontro cedo no sábado: café reforçado, 25 minutos de palavra afiada, 30 minutos em mesas de conversa franca e oração. Libera o homem cedo para a família.'
        },
        {
          icon: 'users',
          title: 'Trios de Prestação de Contas',
          desc: 'O ferro afia o ferro (Pv 27:17): grupos de 3 homens que caminham juntos, oram pelas lutas reais (pureza, caráter, finanças) e se apoiam na semana.'
        },
        {
          icon: 'network',
          title: 'Células em "Terceiros Lugares"',
          desc: 'Alcançar homens que ainda não pisam no templo através de encontros em padaria antes do trabalho, futebol com devocional de 15 min ou grupos de empreendedores.'
        }
      ],
      phasesTitle: 'Arquitetura das 3 Temporadas da Mentoria + Marco 2027',
      phases: [
        {
          tab: 'Fase 1 · Fundamentos',
          period: 'Mar – Abr · Temporada 1 (6 sem.)',
          title: 'Temporada 1: Hombridade, Caráter e Integridade',
          summary: 'Lançamento oficial da Mentoria com Homens da Área 71 focando na identidade masculina segundo a Bíblia.',
          bullets: [
            'Semanas 1–2: Saindo da passividade — o chamado de Adão para cultivar e guardar.',
            'Semanas 3–4: Integridade secreta, pureza dos olhos e domínio próprio.',
            'Semanas 5–6: O homem como amigo leal — formando os primeiros Trios de Prestação de Contas.',
            'Desafio prático: Estabelecer 15 minutos diários de altar pessoal e abençoar a família em voz alta.'
          ]
        },
        {
          tab: 'Fase 2 · Congresso & Lar',
          period: 'Mai – Jul · Congresso 08/05 & Temp. 2',
          title: 'Congresso IEADAM (08/05) + Temporada 2: Marido & Pai Presente',
          summary: 'Mobilização histórica para o Congresso de Homens e imersão familiar durante a Porta do Monturo (Junho).',
          bullets: [
            '08/05/2027: Caravana "Homens de Honra Área 71" no Congresso de Homens IEADAM.',
            'Temporada 2 (Jun–Jul, 6 semanas): Alinhada à Porta do Monturo — cura de feridas com o próprio pai.',
            'Temas práticos: Amar a esposa como Cristo amou a igreja, paternidade ativa e quebra de ira/silêncio no lar.',
            'Desafio prático: Um encontro a sós planejado com a esposa + um tempo exclusivo de qualidade com cada filho.'
          ]
        },
        {
          tab: 'Fase 3 · Provisão & Reino',
          period: 'Set – Out · Temporada 3 (6 sem.)',
          title: 'Temporada 3: Finanças Saudáveis, Trabalho e Liderança',
          summary: 'Equipar os homens para honrar a Deus nos negócios, sair de dívidas e liderar células e frentes na igreja.',
          bullets: [
            'Mordomia financeira bíblica, orçamento doméstico transparente com a esposa e generosidade.',
            'Ética cristã no trabalho e evangelismo no ambiente profissional.',
            'Lançamento de Células Masculinas em "Terceiros Lugares" (Porta de Efraim — Setembro).'
          ]
        },
        {
          tab: 'Fase 4 · Honra & Envio',
          period: 'Nov – Dez · Formatura',
          title: 'Culto de Homens, Prestação de Contas e Novos Mentores',
          summary: 'Celebrar lares restaurados e comissionar os homens da Turma 2027 para liderarem novas mesas em 2028.',
          bullets: [
            'Noite de Testemunhos: esposas e filhos convidados para honrar a transformação dos homens.',
            'Avaliação dos frutos na Porta de Mifcade (Novembro).',
            'Seleção dos facilitadores de mesa que conduzirão as Temporadas de 2028.'
          ]
        }
      ],
      toggles: [
        {
          title: 'Roteiro Exato de um Encontro da Mentoria (90 Minutos — Sem Enrolação)',
          badge: 'Formato Café Sábado',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>06h30 – 07h00:</strong> Café reforçado (pão, ovos, café preto, frutas) e conversa livre — homens se conectam ombro a ombro na mesa.</li>
              <li><strong>07h00 – 07h10:</strong> Louvor acústico objetivo (1 ou 2 hinos fortes) e oração direta.</li>
              <li><strong>07h10 – 07h35:</strong> Ensino prático de 25 minutos sobre o tema da semana (base bíblica + exemplo real do cotidiano).</li>
              <li><strong>07h35 – 08h10:</strong> Dinâmica em Mesas de 6 homens com 3 perguntas impressas (prestação de contas do desafio da semana anterior + aplicação real).</li>
              <li><strong>08h10 – 08h30:</strong> Entrega do "Desafio Prático da Semana" + oração em trios uns pelos outros e encerramento pontual às 8h30.</li>
            </ul>
          `
        },
        {
          title: 'Exemplos de Desafios Práticos Semanais (Para Tirar da Teoria)',
          badge: 'Aplicação Real',
          content: `
            <div class="inner-grid-2">
              <div class="inner-box"><div class="inner-box-title">Desafio 1</div><p>Pedir perdão à esposa ou a um filho por uma falha recente sem dar desculpas.</p></div>
              <div class="inner-box"><div class="inner-box-title">Desafio 2</div><p>Conduzir um culto doméstico de 10 minutos na sala de casa nesta semana.</p></div>
              <div class="inner-box"><div class="inner-box-title">Desafio 3</div><p>Tomar um café com seu trio de prestação de contas e orar por 1 amigo não-cristão.</p></div>
              <div class="inner-box"><div class="inner-box-title">Desafio 4</div><p>Revisar o orçamento da casa com transparência e definir um plano de fidelidade e economia.</p></div>
            </div>
          `
        }
      ],
      checklist: [
        'Definir o líder da Rede de Homens e os primeiros 6 facilitadores de mesa',
        'Fechar as datas dos 6 sábados da Temporada 1 (Março–Abril)',
        'Preparar a ficha simples de 1 página de cada encontro com os desafios semanais',
        'Iniciar em Abril a campanha de caravana para o Congresso de Homens IEADAM (08/05)',
        'Mapear 2 líderes dispostos a abrir células-piloto em "terceiros lugares" no 2º semestre'
      ]
    },

    'idosos': {
      id: 'idosos',
      chapterNum: '07',
      group: 'redes',
      shortTitle: 'Geração 60+ (Idosos)',
      title: 'Geração 60+ · Coroa de Honra, Sabedoria e Legado',
      category: 'Redes & Gerações',
      icon: 'crown',
      theme: {
        accent: '#10B981',
        accent2: '#EAB308',
        rgb: '16, 185, 129',
        rgb2: '234, 179, 8',
        gradient: 'linear-gradient(125deg, #022C22 0%, #065F46 42%, #0F766E 74%, #C6932E 100%)'
      },
      subtitle: 'Virar a chave do assistencialismo para o propósito: honrar, cuidar e ativar os irmãos e irmãs acima de 60 anos como guardiões de oração, sabedoria e mentoria na Área 71.',
      keywords: 'idosos geracao 60+ melhor idade terceira idade coroa de honra sabedoria legado intercessao avos de oracao visitacao',
      properties: [
        { label: 'Nome da Rede', value: 'Geração 60+ · Coroa de Honra (Área 71)' },
        { label: 'Público-Alvo', value: 'Homens e Mulheres 60+, aposentados, avós e irmãos acamados' },
        { label: 'Cadência Principal', value: 'Encontro Diurno Mensal + Torre de Intercessão + Visitação' },
        { label: 'Status 2027', value: 'Projeto estratégico pronto para Censo e Lançamento' }
      ],
      callout: {
        verse: '“Na velhice ainda darão frutos; serão viçosos e florescentes, para anunciarem que o Senhor é reto.”',
        ref: 'Salmo 92:14–15',
        note: 'A melhor idade não é o banco de reservas da igreja — é a coluna de estabilidade, memória espiritual e intercessão. Quando uma igreja honra seus idosos, Deus derrama bênção sobre todas as gerações.'
      },
      pillars: [
        {
          icon: 'heart',
          title: '1. Comunhão & Valorização Diurna',
          desc: 'Chá ou Café da Tarde mensal em horário confortável de dia (ex.: 15h às 17h), com hinos clássicos da Harpa/louvor, palavra edificante e festa dos aniversariantes.'
        },
        {
          icon: 'flame',
          title: '2. Torre de Intercessão da Área 71',
          desc: 'Os 60+ assumem um propósito nobre: escala de oração diária pelos pastores, famílias, jovens, células e pelo tema da Porta de cada mês.'
        },
        {
          icon: 'users',
          title: '3. Ponte "Avós de Oração & Sabedoria"',
          desc: 'Cada idoso adota em oração e carinho 2 adolescentes ou jovens da área; em troca, os jovens oferecem oficinas de celular/tecnologia e carona solidária.'
        },
        {
          icon: 'shield',
          title: '4. Cuidado Integral, Saúde & Visitação',
          desc: 'Protocolo ativo para quem não consegue sair de casa (Santa Ceia domiciliar, visitas afetivas), palestras curtas de saúde/memória e rede de carona para os cultos.'
        }
      ],
      phasesTitle: 'Roteiro de Implantação da Geração 60+ em 2027',
      phases: [
        {
          tab: 'Fase 1 · Censo 60+',
          period: 'Jan – Fev · Mapeamento',
          title: 'Censo Afetivo e Identificação de Necessidades',
          summary: 'Antes de marcar o primeiro evento, conhecer pelo nome cada irmão e irmã 60+ das congregações da Área 71.',
          bullets: [
            'Levantamento nominal em todas as congregações: idade, endereço, aniversários, mobilidade e dons.',
            'Identificação prioritária dos idosos que moram sozinhos, estão acamados ou afastados por falta de transporte.',
            'Formação da equipe de coordenação (incluindo líderes 60+ ativos + voluntários de apoio logístico).'
          ]
        },
        {
          tab: 'Fase 2 · Lançamento',
          period: 'Mar – Mai · Pertencimento',
          title: 'Culto de Honra e Início do Encontro Mensal Diurno',
          summary: 'Apresentar a Geração 60+ com dignidade diante de toda a igreja e consolidar o encontro mensal da tarde.',
          bullets: [
            'Domingo de Honra às Cãs: reconhecimento público dos pioneiros e lançamento oficial do calendário 60+.',
            'Início do Chá/Café "Coroa de Honra" (1 tarde por mês, com acessibilidade, som confortável e letras grandes).',
            'Ativação da Rede de Carona Solidária (motoristas voluntários da igreja buscando idosos aos domingos).'
          ]
        },
        {
          tab: 'Fase 3 · Propósito',
          period: 'Jun – Set · Intercessão & Ponte',
          title: 'Ativação da Torre de Intercessão e "Avós de Oração"',
          summary: 'Transformar a rede em potência espiritual e conectar corações entre avós e jovens da Área 71.',
          bullets: [
            'Entrega do Caderno de Oração da Área 71 (em fonte ampliada) para os intercessores da Torre 60+.',
            '1ª Edição da "Oficina de Sabedoria & Conexão Digital" em parceria com a Rede de Jovens.',
            'Rodas de saúde integral (convite a profissionais de saúde da própria igreja: pressão, memória, nutrição e alongamento leve).'
          ]
        },
        {
          tab: 'Fase 4 · Legado',
          period: 'Out – Dez · Celebração',
          title: 'Mês da Guarda do Lar, Memória Viva e Festa do Legado',
          summary: 'Registrar histórias de fé dos pioneiros e encerrar o ano celebrando frutos na velhice.',
          bullets: [
            'Outubro (Porta da Guarda): participação central dos 60+ clamando pela proteção das famílias da Área 71.',
            'Projeto "Memória Viva": vídeos curtos de 2 minutos gravados pelos jovens com testemunhos de fé dos idosos da igreja.',
            'Almoço/Chá Especial de Confraternização de Fim de Ano com famílias e netos.'
          ]
        }
      ],
      toggles: [
        {
          title: 'Estrutura Ideal do Encontro Mensal 60+ (Horário Diurno: 15h às 17h)',
          badge: 'Experiência Acolhedora',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>15h00 – 15h20 (Chegada Sem Pressa):</strong> Recepção na porta com auxílio de mobilidade, água fresca e música suave.</li>
              <li><strong>15h20 – 15h45 (Louvor Clássico):</strong> Hinos congregacionais conhecidos (letras grandes no telão ou impresso em fonte 16+) e oração de gratidão.</li>
              <li><strong>15h45 – 16h10 (Palavra & Breve Dica de Saúde/Bem-Estar):</strong> 15 min de devocional bíblico cheio de esperança + 10 min de dica prática (saúde, direitos, prevenção a golpes).</li>
              <li><strong>16h10 – 16h25 (Momento Torre de Intercessão):</strong> Clamor específico pelos pedidos da Área 71 e pelos jovens adotados em oração.</li>
              <li><strong>16h25 – 17h00 (Chá da Comunhão & Aniversariantes):</strong> Mesa bonita com opções saudáveis (inclusive sem açúcar/baixo sódio) e parabéns especial aos aniversariantes do mês.</li>
            </ul>
          `
        },
        {
          title: 'Protocolo de Acessibilidade e Visitação aos Acamados',
          badge: 'Cuidado Pastoral',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>Ambiente preparado:</strong> Cadeiras confortáveis com encosto firme, iluminação clara, volume de som agradável (sem excesso de graves) e acesso facilitado a banheiros.</li>
              <li><strong>Santa Ceia em Casa:</strong> Equipe pastoral/diaconal visitando mensalmente idosos acamados no domingo da Ceia para que nunca se sintam esquecidos.</li>
              <li><strong>Ligação de Cuidado:</strong> Se um irmão 60+ faltar 2 semanas seguidas, um voluntário liga no mesmo dia para saber como está a saúde e se precisa de apoio.</li>
            </ul>
          `
        }
      ],
      checklist: [
        'Aplicar o Censo 60+ em todas as congregações da Área 71',
        'Nomear a coordenação da Geração 60+ e a equipe de apoio/carona solidária',
        'Escolher o dia fixo do Encontro Mensal Diurno (ex.: 2ª quarta ou 3º sábado à tarde)',
        'Imprimir o Caderno da Torre de Intercessão em letras grandes',
        'Agendar com a Rede de Jovens a primeira tarde de "Avós de Oração & Oficina Digital"'
      ]
    },

    'kids': {
      id: 'kids',
      chapterNum: '08',
      group: 'redes',
      shortTitle: 'Rede Kids & Famílias',
      title: 'Rede Kids & Famílias · Estratégia "Pense Laranja"',
      category: 'Redes & Gerações',
      icon: 'sparkles',
      theme: {
        accent: '#FB923C',
        accent2: '#FACC15',
        rgb: '251, 146, 60',
        rgb2: '250, 204, 21',
        gradient: 'linear-gradient(125deg, #B45309 0%, #EA580C 45%, #F59E0B 82%, #FDE047 100%)'
      },
      subtitle: 'Completando o mapa geracional da Área 71: unir a luz da igreja (amarelo) ao amor da família (vermelho) para formar crianças apaixonadas por Jesus.',
      keywords: 'kids criancas familias pense laranja ebf julho ebd infantil celulas kids discipulado pais',
      properties: [
        { label: 'Conceito-Chave', value: 'Pense Laranja (Igreja 40h/ano + Pais 3.000h/ano)' },
        { label: 'Marco IEADAM', value: 'EBF Geral no Amazonas — Julho 2027' },
        { label: 'Ritmo Semanal', value: 'EBD Infantil (Domingos 8h) + Culto Kids + Células Kids' },
        { label: 'Por que está aqui?', value: 'Lembrete estratégico que fecha o ciclo de todas as gerações' }
      ],
      callout: {
        verse: '“E estas palavras, que hoje te ordeno, estarão no teu coração; e as intimarás a teus filhos e delas falarás assentado em tua casa...”',
        ref: 'Deuteronômio 6:6–7',
        note: 'A igreja não substitui os pais — ela equipa os pais. Quando o departamento infantil caminha junto com o lar, a criança não apenas "fica entretida no culto", mas desenvolve fé real para a adolescência.'
      },
      pillars: [
        {
          icon: 'sparkles',
          title: 'EBD Infantil & Ensino por Faixa Etária',
          desc: '47 domingos de ensino bíblico vivo, criativo e adequado à idade, acompanhando as 4 Revistas de 2027.'
        },
        {
          icon: 'heart',
          title: 'Aliança com os Pais ("Cartão da Semana")',
          desc: 'Toda semana os pais recebem no WhatsApp 1 versículo e 2 perguntas simples para conversar com os filhos à mesa ou antes de dormir.'
        },
        {
          icon: 'calendar',
          title: 'EBF de Julho com Excelência',
          desc: 'Transformar a Escola Bíblica de Férias (Julho) numa grande porta de evangelismo para crianças da vizinhança e suas famílias.'
        },
        {
          icon: 'shield',
          title: 'Ambiente Seguro & Células Kids',
          desc: 'Protocolo rigoroso de check-in/segurança infantil + incentivo para que cada célula adulta tenha um cantinho intencional para as crianças.'
        }
      ],
      phasesTitle: 'Jornada Kids & Famílias em 2027',
      phases: [
        {
          tab: 'Fase 1 · Base',
          period: 'Jan – Mar · Equipe & EBD',
          title: 'Treinamento de Professores e Abertura da EBD (07/02)',
          summary: 'Capacitar tias, tios e auxiliares no Afiando o Machado e iniciar o ano letivo da EBD com força total.',
          bullets: [
            'Padronização do acolhimento infantil e normas de segurança em todas as salas.',
            '07/02/2027: Lançamento festivo da Revista 1 da EBD Infantil (8h).',
            'Início do envio semanal da "Dica Laranja para Pais" no grupo das famílias.'
          ]
        },
        {
          tab: 'Fase 2 · Família',
          period: 'Abr – Jun · Porta do Monturo',
          title: 'Conferência Kids, Culto em Família e Preparação da EBF',
          summary: 'Integrar pais e filhos em Junho (Porta do Monturo) e preparar equipe e recursos para a grande EBF de Julho.',
          bullets: [
            'Participação de líderes na capacitação da Conferência Kids / Treinamento EBF.',
            'Junho: Atividade "Carta de Honra" e Culto da Família com participação das crianças.',
            'Recrutamento de jovens e voluntários para servirem como monitores na EBF.'
          ]
        },
        {
          tab: 'Fase 3 · EBF & Colheita',
          period: 'Jul – Set · EBF Geral',
          title: 'Execução da EBF (Julho) e Retenção das Famílias Visitantes',
          summary: 'Fazer da EBF um marco evangelístico que traz os pais das crianças visitantes para a igreja e para as células.',
          bullets: [
            'Realização da EBF da Área 71 em datas estratégicas dentro de Julho (com encerramento especial para os pais).',
            'Convite imediato das famílias visitantes para as Células Kids e Cultos da Área.',
            'Aulões festivos de encerramento das Revistas 1 (09/05), 2 (15/08) e 3 (21/11).'
          ]
        },
        {
          tab: 'Fase 4 · Transição',
          period: 'Out – Dez · Legado',
          title: 'Mês das Crianças, Transição para Juniores/Jovens e Natal',
          summary: 'Celebrar o valor das crianças e preparar a passagem saudável dos pré-adolescentes para a Rede de Jovens.',
          bullets: [
            'Outubro: Dia das Crianças evangelístico e oração de bênção dos pais sobre os filhos.',
            'Rito de transição para crianças de 11–12 anos ingressarem na rede adolescente/jovem sem se perderem.',
            'Cantata/Apresentação de Natal em Dezembro (Porta Oriental).'
          ]
        }
      ],
      toggles: [
        {
          title: 'Como aplicar o "Pense Laranja" na prática sem custo alto',
          badge: 'Metodologia',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>1 Mensagem por semana no WhatsApp dos Pais:</strong> "Hoje seu filho aprendeu sobre [tema]. Durante o jantar, pergunte a ele: [pergunta simples]. Orem juntos por [motivo]."</li>
              <li><strong>Culto Intergeracional Trimestral:</strong> Um momento curto no culto de domingo em que pais impõem as mãos sobre os filhos para abençoá-los.</li>
              <li><strong>Kit Célula Kids:</strong> Um arquivo PDF simples por mês com desenho e história de 15 minutos alinhada à Porta do mês para usar nas células nas casas.</li>
            </ul>
          `
        },
        {
          title: 'Checklist de Segurança e Cuidado Infantil',
          badge: 'Padrão de Excelência',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li>Identificação com pulseira ou crachá de entrega/retirada apenas pelo responsável cadastrado.</li>
              <li>Sempre 2 adultos ou 1 adulto + 1 auxiliar treinada em sala (nunca 1 adulto isolado com uma criança).</li>
              <li>Ficha rápida de alergias alimentares e telefone de emergência dos pais.</li>
            </ul>
          `
        }
      ],
      checklist: [
        'Validar a coordenação da Rede Kids e escalas de professores da EBD 2027',
        'Definir a semana exata da EBF da Área 71 dentro de Julho (para limpar o calendário mensal)',
        'Implantar o cartão semanal "Pense Laranja" enviado aos pais no WhatsApp',
        'Estabelecer o protocolo de segurança e check-in infantil nas congregações'
      ]
    },

    'louvor': {
      id: 'louvor',
      chapterNum: '09',
      group: 'pilares',
      shortTitle: 'Seminário de Louvor',
      title: 'Seminário de Louvor e Adoração · Veredas Antigas',
      category: 'Eventos & Pilares',
      icon: 'music',
      theme: {
        accent: '#A78BFA',
        accent2: '#22D3EE',
        rgb: '167, 139, 250',
        rgb2: '34, 211, 238',
        gradient: 'linear-gradient(125deg, #2E1065 0%, #5B21B6 38%, #0E7490 76%, #D4A13B 100%)'
      },
      subtitle: 'Resgatar a essência bíblica da adoração na Porta Velha (Abril): unindo Doutrina Saudável, Santidade no Altar e Excelência Técnica em Música, Som e Mídia.',
      keywords: 'seminario louvor adoracao abril porta velha veredas antigas doutrina levitas musica vocal banda som midia oficinas',
      properties: [
        { label: 'Mês-Âncora / Porta', value: 'Abril · Porta Velha ("Doutrina com foco em adoração")' },
        { label: 'Público-Alvo', value: 'Ministros de Louvor, Músicos, Vocais, Som/Mídia, Líderes de Célula e Igreja' },
        { label: 'Formato', value: 'Fim de Semana Completo (Sexta Noite a Domingo) + 4 Oficinas' },
        { label: 'Status 2027', value: 'Data em Abril a definir (sugestão: 16–18/04 ou 23–25/04)' }
      ],
      callout: {
        verse: '“Ponde-vos nos caminhos, e vede, e perguntai pelas veredas antigas, qual é o bom caminho, e andai por ele; e achareis descanso para a vossa alma.”',
        ref: 'Jeremias 6:16 · João 4:23–24',
        note: 'A Porta Velha nos lembra que a verdadeira reforma na adoração não é seguir modismos de palco, mas voltar à teologia sadia: adorar em Espírito (vida rendida) e em Verdade (Palavra e excelência).'
      },
      pillars: [
        {
          icon: 'book',
          title: 'Teologia da Adoração (Doutrina)',
          desc: 'Cantar o que a Bíblia ensina: curadoria de repertório cristocêntrico, compreensão litúrgica do culto e o papel do ministro como servo da igreja.'
        },
        {
          icon: 'flame',
          title: 'Vida no Altar (Caráter & Santidade)',
          desc: 'Antes do microfone, o secreto. Tratar vaidade, comparações, ensaios sem oração e restaurar o temor de Deus nos bastidores.'
        },
        {
          icon: 'music',
          title: 'Excelência Técnica Integrada',
          desc: 'Oficinas práticas simultâneas para Vocais, Instrumentistas, Sonoplastia/Mídia e Condução de Louvor em cultos e células.'
        },
        {
          icon: 'layers',
          title: 'Legado Pós-Seminário',
          desc: 'O seminário não termina no domingo: gera o Manual de Louvor da Área 71, escalas saudáveis e encontros bimestrais de alinhamento.'
        }
      ],
      phasesTitle: 'Linha do Tempo do Seminário de Louvor (4 Fases)',
      phases: [
        {
          tab: 'Fase 1 · Diagnóstico',
          period: 'Fev – Mar · Preparação',
          title: 'Mapeamento das Equipes, Curadoria e Inscrições',
          summary: 'Levantar as dores reais das equipes de louvor, som e projeção da Área 71 para desenhar oficinas sob medida.',
          bullets: [
            'Diagnóstico rápido com líderes de louvor e técnicos de som das congregações (equipamentos, escalas e carências técnicas).',
            'Definição da data exata em Abril (ex.: 16 a 18/04 ou 23 a 25/04) e confirmação de preletores e oficineiros.',
            'Abertura das inscrições com divulgação forte no Culto de Ensino e nas redes em Março.'
          ]
        },
        {
          tab: 'Fase 2 · Abertura & Oficinas',
          period: 'Abril · Sexta e Sábado Manhã',
          title: 'Plenária "Veredas Antigas" + 4 Oficinas Práticas Simultâneas',
          summary: 'Combinação de ministração bíblica profunda na sexta à noite com treinamento técnico intensivo no sábado pela manhã.',
          bullets: [
            'Sexta (19h30): Abertura aberta a toda a igreja — "As Veredas Antigas da Adoração: Espírito e Verdade".',
            'Sábado (08h30 às 12h00): 4 salas simultâneas (Vocal, Banda, Som/Mídia e Direção de Louvor em Cultos/Células).',
            'Coffee break de integração entre músicos e equipe técnica (quebrando a distância entre altar e mesa de som).'
          ]
        },
        {
          tab: 'Fase 3 · Consagração',
          period: 'Abril · Sábado Noite e Domingo',
          title: 'Noite de Adoração Profética & Culto de Envio dos Levitas',
          summary: 'Transformar o aprendizado em entrega genuína diante de Deus com toda a igreja reunida.',
          bullets: [
            'Sábado (19h00): Noite de Adoração — tempo estendido de louvor congregacional, palavra sobre santidade e consagração das equipes.',
            'Domingo (Culto da Noite): Celebração com toda a Área 71, apresentação de repertório congregacional unificado e oração de envio.',
            'Imposição de mãos sobre músicos, cantores, técnicos de som, projeção e mídia.'
          ]
        },
        {
          tab: 'Fase 4 · Escola Contínua',
          period: 'Mai – Dez · Sustentação',
          title: 'Manual de Escalas Saudáveis e Formação de Novos Músicos',
          summary: 'Garantir que o fruto de Abril permaneça vivo o ano inteiro e forme a próxima geração de adoradores.',
          bullets: [
            'Publicação do "Guia Prático do Ministério de Louvor & Mídia — Área 71" (repertório aprovado, postura, pontualidade e devocional de ensaio).',
            'Implantação do "Ensaio com Altar": primeiros 15 minutos de todo ensaio dedicados à Palavra e oração.',
            'Abertura de trilha básica para adolescentes e jovens aprenderem violão, teclado, mesa de som e projeção.'
          ]
        }
      ],
      toggles: [
        {
          title: 'Grade Detalhada das 4 Oficinas Práticas de Sábado Manhã',
          badge: 'Programação Técnica',
          content: `
            <div class="inner-grid-2">
              <div class="inner-box">
                <div class="inner-box-title">Oficina 1 · Técnica Vocal & Harmonia</div>
                <p>Aquecimento, saúde vocal, divisão de vozes, equilíbrio entre ministro e backing vocals e comunicação sem exageros.</p>
              </div>
              <div class="inner-box">
                <div class="inner-box-title">Oficina 2 · Instrumentos & Dinâmica de Banda</div>
                <p>Tocar juntos sem "brigar por espaço", controle de volume de palco, transições suaves entre músicas e preparo antes do ensaio.</p>
              </div>
              <div class="inner-box">
                <div class="inner-box-title">Oficina 3 · Som, Mesa & Projeção/Telão</div>
                <p>Passagem de som eficiente, equalização limpa para a igreja cantar, pontualidade nas letras do telão e comunicação com o altar.</p>
              </div>
              <div class="inner-box">
                <div class="inner-box-title">Oficina 4 · Direção de Louvor (Cultos & Células)</div>
                <p>Como escolher repertório bíblico alinhado à Porta do mês, conduzir a igreja (e não só se apresentar) e ministrar louvor simples nas células.</p>
              </div>
            </div>
          `
        },
        {
          title: 'Checklist Técnico e Logístico do Seminário',
          badge: 'Produção',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>Salas:</strong> Templo principal (plenárias + oficina de banda/som) + 3 salas auxiliares ventiladas para vocal, mídia e direção de louvor.</li>
              <li><strong>Equipamentos:</strong> Checagem prévia de microfones, cabos, retorno, projetor e mesa de som 7 dias antes.</li>
              <li><strong>Material de Apoio:</strong> Apostila digital/impressa de 8 páginas com resumo doutrinário + lista de princípios do adorador da Área 71.</li>
            </ul>
          `
        }
      ],
      checklist: [
        'Definir a data oficial do Seminário de Louvor em Abril (sugestão: 16–18/04 ou 23–25/04)',
        'Confirmar preletor da doutrina da adoração e os 4 instrutores das oficinas técnicas',
        'Realizar levantamento de todos os músicos, vocais e técnicos de som/mídia da Área 71',
        'Produzir a apostila "Veredas Antigas" e abrir inscrições em Março',
        'Aprovar o Guia de Escalas Saudáveis e Ensaios com Altar para o pós-seminário'
      ]
    },

    'celulas': {
      id: 'celulas',
      chapterNum: '10',
      group: 'pilares',
      shortTitle: 'Células & Evangelismo',
      title: 'Células & Evangelismo · Motor de Crescimento da Área 71',
      category: 'Eventos & Pilares',
      icon: 'network',
      theme: {
        accent: '#2DD4BF',
        accent2: '#0EA5E9',
        rgb: '45, 212, 191',
        rgb2: '14, 165, 233',
        gradient: 'linear-gradient(125deg, #042F2E 0%, #0F766E 42%, #0284C7 82%, #1E293B 100%)'
      },
      subtitle: 'Integrando evangelismo relacional, Casas de Paz, retenção em 48 horas e multiplicação saudável de células ao longo das 12 Portas de 2027.',
      keywords: 'celulas evangelismo casas de paz porta do peixe conferencia celulas 27 marco porta de efraim setembro multiplicacao grande batismo dezembro retencao',
      properties: [
        { label: 'Meses-Âncora 2027', value: 'Fev (Porta do Peixe) · Mar (Conf. 27/03) · Set (Porta de Efraim)' },
        { label: 'Colheita Anual', value: 'Grande Batismo IEADAM — 04 ou 05/12/2027' },
        { label: 'Estratégia-Chave', value: 'Casas de Paz (7 semanas) + Funil 48h + Células de Afinidade' },
        { label: 'Princípio', value: 'Ser uma Igreja EM Células (não apenas COM células)' }
      ],
      callout: {
        verse: '“E, perseverando unânimes todos os dias no templo, e partindo o pão em casa... E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar.”',
        ref: 'Atos 2:46–47',
        note: 'O templo inspira multidões, mas é na sala de uma casa — ao redor da Palavra, do pão e da oração — que ninguém fica invisível e novos líderes nascem.'
      },
      pillars: [
        {
          icon: 'compass',
          title: 'Casas de Paz (Ciclo de 7 Semanas)',
          desc: 'Duplas visitam lares de vizinhos, colegas ou parentes por 7 semanas com oração curta e palavra de paz (Lucas 10), encerrando numa celebração no templo.'
        },
        {
          icon: 'clock',
          title: 'Funil de Retenção das 48 Horas',
          desc: 'Fechar a "porta dos fundos": todo visitante ou novo decidido recebe contato acolhedor em até 48h e convite pessoal para a célula mais próxima.'
        },
        {
          icon: 'network',
          title: 'Células de Afinidade',
          desc: 'Além das células por bairro, abrir frentes para perfis específicos (jovens, casais novos, mães, esportistas, empreendedores).'
        },
        {
          icon: 'target',
          title: 'Indicadores Preventivos de Saúde',
          desc: 'Acompanhar 3 sinais simples (tem líder em treinamento? houve reuniões canceladas? recebeu visitantes no mês?) para cuidar antes que a célula enfraqueça.'
        }
      ],
      phasesTitle: 'Ciclo Celular e Evangelístico 2027 (4 Fases)',
      phases: [
        {
          tab: 'Fase 1 · Envio',
          period: 'Jan – Mar · Porta do Peixe',
          title: 'Alinhamento, Casas de Paz e Conferência de Células (27/03)',
          summary: 'Lançar o fogo evangelístico em Fevereiro e capacitar toda a rede celular na Conferência da IEADAM.',
          bullets: [
            'Fevereiro (Porta do Peixe): Lançamento da 1ª Onda de Casas de Paz (7 semanas) na Área 71.',
            'Ativação do Protocolo das 48h na recepção de todas as congregações.',
            '27/03/2027: Presença expressiva dos líderes de células na EBO / Conferência de Células (Auditório Canaã).'
          ]
        },
        {
          tab: 'Fase 2 · Consolidação',
          period: 'Abr – Jun · Cuidado & Saúde',
          title: 'Consolidação dos Frutos e Formação de Líderes em Treinamento',
          summary: 'Garantir que cada célula tenha ao menos um auxiliar em formação prática antes do ciclo de multiplicação.',
          bullets: [
            'Diagnóstico semestral da saúde das células (cuidado pastoral preventivo com líderes cansados).',
            'Roteiros celulares 100% alinhados às Portas de Abril (Adoração), Maio (Espírito) e Junho (Família).',
            'Abertura das primeiras Células de Afinidade integradas às Redes de Homens, Mulheres e Jovens.'
          ]
        },
        {
          tab: 'Fase 3 · Multiplicação',
          period: 'Jul – Set · Porta de Efraim',
          title: '2ª Onda de Casas de Paz e Grande Multiplicação (Setembro)',
          summary: 'Preparar o terreno em Agosto e celebrar novas células nascendo em Setembro na Porta de Efraim.',
          bullets: [
            'Agosto: Oração pelas famílias-alvo na Campanha de Batalha Espiritual + treinamento final dos novos líderes.',
            'Setembro (Porta de Efraim): Festa da Multiplicação de Células da Área 71 com envio e unção das novas casas.',
            '27/09/2027: Celebração unificada no Culto Geral de Núcleos (Núcleo 17 — Pr. Paulo Castro).'
          ]
        },
        {
          tab: 'Fase 4 · Batismo',
          period: 'Out – Dez · Grande Colheita',
          title: 'Classe de Batismo, Revisão Anual e Grande Batismo (04–05/12)',
          summary: 'Levar os frutos do ano às águas batismais e honrar anfitriões e líderes fiéis.',
          bullets: [
            'Outubro–Novembro: Curso de Preparação para o Batismo integrado às células.',
            '04 ou 05/12/2027: Participação marcante da Área 71 no Grande Batismo IEADAM.',
            'Dezembro: Entrega de cargos com honra aos anfitriões e líderes multiplicadores.'
          ]
        }
      ],
      toggles: [
        {
          title: 'Como funciona o Protocolo de Retenção das 48 Horas',
          badge: 'Antídoto contra Evasão',
          content: `
            <ol class="space-y-1.5 text-sm list-decimal pl-5">
              <li><strong>No Culto (Minuto 0):</strong> Acolhimento caloroso na chegada e ficha digital/QR Code simples (Nome, WhatsApp, Bairro e Pedido de Oração).</li>
              <li><strong>Em até 24h:</strong> Mensagem pessoal (não robótica) agradecendo a visita e confirmando que a equipe está orando pelo pedido.</li>
              <li><strong>Em até 48h:</strong> O líder da célula mais próxima (ou da rede correspondente) faz contato amigável convidando para um café ou para a próxima reunião da célula.</li>
              <li><strong>Sinal de Alerta (3 semanas ausente):</strong> Se um membro frequente sumir por 3 semanas, a equipe de cuidado liga ou faz uma visita breve de 15 minutos.</li>
            </ol>
          `
        },
        {
          title: 'Painel Simples de Saúde Celular (Semáforo Pastoral)',
          badge: 'Gestão Saudável',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong style="color:#10B981">Verde (Pronta para Multiplicar):</strong> Reuniões regulares, visitantes no mês e auxiliar pronto para assumir.</li>
              <li><strong style="color:#F59E0B">Amarelo (Atenção & Apoio):</strong> Boa comunhão interna, mas sem visitantes há 60 dias ou sem líder em treinamento.</li>
              <li><strong style="color:#F43F5E">Vermelho (Cuidado Pastoral Urgente):</strong> Líder sobrecarregado, reuniões sendo canceladas ou conflito interno — supervisor entra para abraçar e restaurar, não para punir.</li>
            </ul>
          `
        }
      ],
      checklist: [
        'Mapear todas as células ativas da Área 71 no semáforo de saúde (Verde/Amarelo/Vermelho)',
        'Preparar o livreto simples da Campanha "Casas de Paz (7 Semanas)" para Fevereiro',
        'Implantar o Protocolo das 48h com ficha de visitantes em todas as congregações',
        'Mobilizar todos os líderes e auxiliares para a Conferência de Células (27/03)',
        'Definir a meta realista de novas células para a Porta de Efraim (Setembro)'
      ]
    },

    'ensino-oracao': {
      id: 'ensino-oracao',
      chapterNum: '11',
      group: 'pilares',
      shortTitle: 'Ensino, Oração & Vigília',
      title: 'Ensino, Oração & Vigília · Coluna Espiritual 2027',
      category: 'Eventos & Pilares',
      icon: 'book',
      theme: {
        accent: '#60A5FA',
        accent2: '#EAB308',
        rgb: '96, 165, 250',
        rgb2: '234, 179, 8',
        gradient: 'linear-gradient(125deg, #090D1F 0%, #1E3A8A 45%, #1D4ED8 74%, #B58425 100%)'
      },
      subtitle: 'A espinha dorsal que sustenta todas as redes: 47 domingos de EBD, Culto de Ensino às terças, Campanha de Oração de 12 dias, Batalha Espiritual em Agosto e a Vigília Anual da Área 71.',
      keywords: 'ensino oracao vigilia ebd 2027 47 domingos revistas aulao culto ensino terca 19h30 campanha 12 dias janeiro batalha espiritual agosto porta dos cavalos',
      properties: [
        { label: 'EBD 2027', value: 'Início 07/02 · Domingos 8h · 47 Domingos · 4 Revistas' },
        { label: 'Culto de Ensino', value: 'Todas as Terças-feiras às 19h30' },
        { label: 'Campanhas de Oração', value: '12 Dias (04–15/01) · Batalha Espiritual (Ago, antes 28/08)' },
        { label: 'Vigília Área 71', value: 'Obrigação anual IEADAM por área — Data 2027 a definir' }
      ],
      callout: {
        verse: '“Mas nós perseveraremos na oração e no ministério da palavra.”',
        ref: 'Atos 6:4',
        note: 'Projetos brilhantes sem Palavra geram entretenimento; estratégias sem oração geram cansaço. Ensino sólido e altar aceso são o combustível invisível de tudo o que a Área 71 fará em 2027.'
      },
      pillars: [
        {
          icon: 'book',
          title: 'Escola Bíblica Dominical (47 Domingos)',
          desc: 'Início em 07/02 às 8h com 4 Revistas completas e 3 grandes Aulões de Conclusão (09/05, 15/08 e 21/11) para celebrar o aprendizado.'
        },
        {
          icon: 'calendar',
          title: 'Culto de Ensino (Terças · 19h30)',
          desc: 'Aprofundamento bíblico semanal conectado à Porta do mês, formando cristãos capazes de discernir os tempos e defender a fé.'
        },
        {
          icon: 'flame',
          title: 'Campanhas de Oração & Guerra',
          desc: 'Abertura do ano com 12 dias de clamor (04 a 15/01) e Campanha de Batalha Espiritual em Agosto (Efésios 6:10–18) encerrando antes de 28/08.'
        },
        {
          icon: 'shield',
          title: 'Vigília da Área 71 (Marco Anual)',
          desc: 'Uma noite inesquecível de busca, intercessão e avivamento reunindo todas as congregações e redes da Área 71.'
        }
      ],
      phasesTitle: 'Calendário Integrado de Ensino, Oração e Vigília (2027)',
      phases: [
        {
          tab: '1º Tri · Altar & EBD',
          period: 'Jan – Mar',
          title: '12 Dias de Oração e Abertura da EBD 2027',
          summary: 'Consagrar o ano na Porta das Ovelhas e lançar a primeira revista da Escola Bíblica Dominical.',
          bullets: [
            '04/01 a 15/01: Campanha de Oração de 12 dias (cada dia consagrando 1 mês/Porta de 2027).',
            '07/02/2027: Início oficial da EBD na Área 71 (8h) — Revista 1 · Lição 1.',
            'Preenchimento prévio da planilha de títulos e textos bíblicos das lições com a equipe de professores.'
          ]
        },
        {
          tab: '2º Tri · Pentecostes',
          period: 'Abr – Jun',
          title: 'Aulão Revista 1, Pentecostes e Início da Revista 2',
          summary: 'Manter a frequência alta na EBD através dos aulões dinâmicos e aprofundar a doutrina em Abril e Maio.',
          bullets: [
            '09/05/2027: Aulão de Conclusão da Revista 1 da EBD (café da manhã + revisão interativa).',
            '16/05/2027: Domingo de Pentecostes + Início da Revista 2 · Lição 1.',
            'Janela sugerida para a Vigília da Área 71: Maio (Porta da Fonte — Espírito Santo) ou Agosto (Porta dos Cavalos).'
          ]
        },
        {
          tab: '3º Tri · Batalha',
          period: 'Jul – Set',
          title: 'Aulão Revista 2 e Campanha de Batalha Espiritual (Agosto)',
          summary: 'Fortalecer espiritualmente as famílias na Porta dos Cavalos antes do grande avanço de multiplicação.',
          bullets: [
            '15/08/2027: Aulão de Conclusão da Revista 2 · 22/08/2027: Início da Revista 3.',
            'Agosto (fechar antes de 28/08): Campanha de Batalha Espiritual baseada na Armadura de Deus (Ef 6:10–18).',
            'Sinergia com a Torre de Intercessão da Geração 60+ cobrindo cada culto de campanha.'
          ]
        },
        {
          tab: '4º Tri · Conclusão',
          period: 'Out – Dez',
          title: 'Aulão Revista 3, Revista 4 e Gratidão pelo Ano',
          summary: 'Consolidar a caminhada bíblica anual com prestação de contas e celebração.',
          bullets: [
            '21/11/2027: Aulão de Conclusão da Revista 3 da EBD.',
            '28/11/2027: Início da Revista 4 (5 domingos fechando o ano até 26/12).',
            'Honra aos professores da EBD, intercessores e equipe de ensino na Entrega dos Cargos em Dezembro.'
          ]
        }
      ],
      toggles: [
        {
          title: 'Mapa Oficial das 4 Revistas da EBD 2027 (47 Domingos)',
          badge: 'Fiel à Agenda 2027',
          content: `
            <div class="table-wrap">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Revista</th>
                    <th>Período</th>
                    <th>Domingos</th>
                    <th>Marco de Encerramento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Revista 1</strong></td><td>07/02 a 09/05</td><td>14</td><td>Aulão de Conclusão: 09/05</td></tr>
                  <tr><td><strong>Revista 2</strong></td><td>16/05 a 15/08</td><td>14</td><td>Aulão de Conclusão: 15/08</td></tr>
                  <tr><td><strong>Revista 3</strong></td><td>22/08 a 21/11</td><td>14</td><td>Aulão de Conclusão: 21/11</td></tr>
                  <tr><td><strong>Revista 4</strong></td><td>28/11 a 26/12</td><td>5</td><td>Continuidade em Jan/2028</td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          title: 'Proposta para a Vigília Anual da Área 71 (Exigência IEADAM)',
          badge: 'Decisão de Agenda',
          content: `
            <p class="text-sm mb-2">Para cumprir com excelência a orientação da IEADAM de realizar uma vigília anual por área, sugerimos escolher entre duas datas estratégicas:</p>
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>Opção 1 (Maio — Sexta 14/05, véspera de Pentecostes):</strong> Alinhamento perfeito com a <em>Porta da Fonte</em> (Espírito Santo).</li>
              <li><strong>Opção 2 (Agosto — Sexta 20/08):</strong> Servindo como grande encerramento da Campanha de Batalha Espiritual (<em>Porta dos Cavalos</em>), uma semana antes do Congresso de Mulheres (28/08).</li>
            </ul>
            <p class="text-xs muted-note mt-2">Formato sugerido: 22h às 03h em 4 turnos temáticos (Adoração & Quebrantamento → Intercessão pelas Famílias → Palavra de Avivamento → Envio das Redes e Células).</p>
          `
        }
      ],
      checklist: [
        'Preencher os títulos das lições e textos bíblicos das 47 aulas na planilha EBD 2027',
        'Preparar o roteiro dos 12 dias da Campanha de Oração de Janeiro (04 a 15/01)',
        'Definir a data exata da Campanha de Batalha Espiritual em Agosto (encerrando antes de 28/08)',
        'Escolher a data da Vigília Anual da Área 71 (Maio ou Agosto) e montar escala de turnos',
        'Organizar o formato festivo dos 3 Aulões da EBD (09/05, 15/08 e 21/11)'
      ]
    },
    'intercessao': {
      id: 'intercessao',
      chapterNum: '12',
      group: 'pilares',
      shortTitle: 'Intercessão & Círculos de Oração',
      title: 'Ministério de Intercessão · Círculos de Oração e Campanhas',
      category: 'Eventos & Pilares',
      icon: 'flame',
      theme: {
        accent: '#818CF8',
        accent2: '#F59E0B',
        rgb: '129, 140, 248',
        rgb2: '245, 158, 11',
        gradient: 'linear-gradient(125deg, #0B1020 0%, #312E81 46%, #4F46E5 76%, #B58425 100%)'
      },
      subtitle: 'O ministério transversal que sustenta todas as redes: um líder de intercessão, círculos de oração que continuam entre as campanhas e as duas grandes campanhas do ano.',
      keywords: 'intercessao ministerio lider circulo de oracao campanha oracao janeiro agosto batalha espiritual torre de intercessao vigilia congregacao',
      properties: [
        { label: 'Natureza', value: 'Ministério transversal: atravessa as redes e as congregações da Área 71' },
        { label: 'Liderança', value: 'Líder de intercessão da Área (a nomear) + responsável por congregação (modelo a confirmar)' },
        { label: 'Campanha de Janeiro', value: '04 a 15/01 · 12 dias · 10h às 00h (a princípio) · Congregação 09 · Terça e domingo: culto em cada congregação local' },
        { label: 'Campanha de Agosto', value: 'Batalha Espiritual (Efésios 6:10-18) · data a definir, fechando antes de 28/08' },
        { label: 'Status', value: 'Em desenho: conceitos serão aprofundados na montagem das páginas' }
      ],
      callout: {
        verse: '“Todos estes perseveravam unanimemente em oração e súplicas.”',
        ref: 'Atos 1:14',
        note: 'A igreja nasce orando. A estrutura, os projetos e as redes só se sustentam se houver quem permaneça no altar por elas.'
      },
      pillars: [
        {
          icon: 'shield',
          title: 'Líder de Intercessão',
          desc: 'Uma liderança definida para o ministério: coordena as campanhas, acompanha os círculos e mantém a cobertura de oração de cada rede.'
        },
        {
          icon: 'users',
          title: 'Círculos de Oração',
          desc: 'Grupos que continuam orando entre as campanhas, por congregação, para que o fôlego de janeiro não se apague em março.'
        },
        {
          icon: 'flame',
          title: 'Campanha de Janeiro',
          desc: 'Doze dias de clamor (04 a 15/01) para abrir o ano, das 10h à meia-noite na Congregação 09, com culto local na terça e no domingo.'
        },
        {
          icon: 'target',
          title: 'Campanha de Agosto',
          desc: 'Batalha Espiritual na Porta dos Cavalos, a partir de Efésios 6:10-18, fechando antes do Congresso de Mulheres (28/08).'
        }
      ],
      phasesTitle: 'Estrutura do Ministério de Intercessão (proposta)',
      phases: [
        {
          tab: 'Liderança',
          period: 'Jan · Estruturação',
          title: 'Quem lidera a oração da Área 71',
          summary: 'A vaga de líder de intercessão entra no Mapa de Liderança (noite de 14/01) junto com as vagas de cada rede.',
          bullets: [
            'Líder de intercessão da Área, escolhido pelo pastor a partir do Mapa de Liderança.',
            'Responsável por congregação para manter o círculo de oração local.',
            'Pares de intercessores ligados a cada rede, para toda rede ter cobertura.',
            'Decisão pendente: um líder único para a Área ou um por congregação com coordenador acima.'
          ]
        },
        {
          tab: 'Círculos',
          period: 'Fev – Dez · Permanente',
          title: 'Círculos de Oração entre as campanhas',
          summary: 'O que acontece nos meses sem campanha. Formato a definir pelo pastor.',
          bullets: [
            'Um círculo de oração por congregação, com dia e horário fixos.',
            'Pedidos acompanhados e testemunhos registrados mês a mês, ligados à Porta do mês.',
            'Conexão com a Torre de Intercessão da Geração 60+ e com a equipe de Intercessão da Rede de Mulheres.',
            'Pergunta aberta: o Círculo de Oração é uma rede de mulheres ou um modelo para toda a igreja?'
          ]
        },
        {
          tab: 'Campanha Jan',
          period: '04 a 15/01 · 12 dias',
          title: 'Campanha de Oração de Janeiro',
          summary: 'Abertura espiritual do ano, todos os dias, das 10h à meia-noite (a princípio), na Congregação 09.',
          bullets: [
            'Terça e domingo: culto em cada congregação local; no restante do dia, uma só congregação (a 09).',
            'Cada dia pode consagrar uma Porta ou um mês de 2027.',
            'A Campanha segue em todos os dias, inclusive nas noites da Escola (07, 11, 14/01). Nas terças e domingos continua depois do culto local; no Fruto Fiel (09/01), depois dele.',
            'Encerramento em 15/01, véspera da primeira noite sem Campanha.'
          ]
        },
        {
          tab: 'Campanha Ago + Vigília',
          period: 'Ago · Data a definir',
          title: 'Batalha Espiritual e Vigília Anual',
          summary: 'A segunda grande campanha do ano e a Vigília exigida por área pela IEADAM.',
          bullets: [
            'Campanha de Batalha Espiritual em Agosto, baseada em Efésios 6:10-18, encerrando antes de 28/08.',
            'Vigília da Área 71: janela sugerida em Maio (Porta da Fonte) ou Agosto (Porta dos Cavalos).',
            'Líder de intercessão e círculos como equipe de apoio de cada culto de campanha.'
          ]
        }
      ],
      toggles: [
        {
          title: 'Decisões pendentes do pastor',
          badge: 'Decisão',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li>Qual o objetivo de cada campanha: intercessão pela igreja, pela cidade ou pelo avivamento?</li>
              <li>Quem conduz cada dia e em qual horário?</li>
              <li>O que permanece depois da campanha: círculos fixos, pedidos acompanhados, testemunhos?</li>
              <li>Líder de intercessão único para a Área ou um por congregação?</li>
              <li>O Círculo de Oração é rede de mulheres ou modelo para toda a igreja?</li>
            </ul>
          `
        },
        {
          title: 'Base Bíblica para o Ministério (referências a conferir no texto)',
          badge: 'Escrituras',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>Atos 1:14:</strong> a igreja nasce em unanimidade de oração.</li>
              <li><strong>Atos 2:42:</strong> a oração como marca da comunidade.</li>
              <li><strong>Atos 12:5 e 12:</strong> a igreja ora por Pedro, e o grupo se reúne em uma casa (liga com a célula).</li>
              <li><strong>Mateus 18:19-20:</strong> a oração em acordo.</li>
              <li><strong>Neemias 1:</strong> Neemias ora antes de reconstruir (liga com as 12 Portas).</li>
            </ul>
          `
        },
        {
          title: 'Conexão com as Redes',
          badge: 'Integração',
          content: `
            <ul class="space-y-1.5 text-sm list-disc pl-5">
              <li><strong>Geração 60+:</strong> a Torre de Intercessão já prevista no capítulo da rede passa a ser parte do ministério.</li>
              <li><strong>Mulheres:</strong> a equipe de Intercessão da rede se liga ao líder de intercessão da Área.</li>
              <li><strong>Demais redes:</strong> um par de intercessores por rede, indicado na noite de 14/01.</li>
            </ul>
          `
        }
      ],
      checklist: [
        'Incluir as vagas de líder de intercessão e de responsável por congregação no Mapa de Liderança (14/01)',
        'Decidir se o líder de intercessão é único para a Área ou um por congregação',
        'Definir o formato dos círculos de oração entre as campanhas',
        'Montar a escala e o roteiro dos 12 dias da Campanha de Janeiro (04 a 15/01)',
        'Definir a data da Campanha de Batalha Espiritual em Agosto (antes de 28/08)',
        'Escolher a data da Vigília Anual da Área 71 (Maio ou Agosto)'
      ]
    }
  };

  return {
    SITE_META,
    NAV_GROUPS,
    DOZE_PORTAS_2027,
    HOME_METRICS,
    PENDENCIAS_DATAS,
    CONFLITOS_IEADAM,
    PAGES
  };
})();
