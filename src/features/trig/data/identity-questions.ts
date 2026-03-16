import type { QuizQuestionData } from '@/types';

/** 和差公式即时训练（5 题） */
export const sumDiffPractice: QuizQuestionData[] = [
  {
    id: 'ti-sd-1',
    question: 'sin 75° 的精确值是',
    questionLatex: '\\sin 75° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}+1}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{2}}{2}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}',
    explanation: '',
    explanationLatex: '\\textbf{第①步 凑角：}75°=45°+30°\\\\[4pt]\\textbf{第②步 套正弦和角公式：}\\\\[2pt]\\sin 75°=\\sin(45°+30°)=\\sin 45°\\cos 30°+\\cos 45°\\sin 30°\\\\[4pt]\\textbf{第③步 代入特殊值：}\\\\[2pt]=\\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{\\sqrt{3}}{2}+\\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{1}{2}=\\dfrac{\\sqrt{6}}{4}+\\dfrac{\\sqrt{2}}{4}=\\boxed{\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}}',
  },
  {
    id: 'ti-sd-2',
    question: 'cos 15° 的精确值是',
    questionLatex: '\\cos 15° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{2}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}',
    explanation: '',
    explanationLatex: '\\textbf{第①步 凑角：}15°=45°-30°\\\\[4pt]\\textbf{第②步 套余弦差角公式}（注意余弦符号\\textbf{相反}）\\textbf{：}\\\\[2pt]\\cos 15°=\\cos(45°-30°)=\\cos 45°\\cos 30°+\\sin 45°\\sin 30°\\\\[4pt]\\textbf{第③步 代入：}\\\\[2pt]=\\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{\\sqrt{3}}{2}+\\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{1}{2}=\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}\\\\[4pt]\\textbf{注意：}\\cos(\\alpha-\\beta)\\text{ 中间是 }+\\text{号！和 }\\cos(\\alpha+\\beta)\\text{ 相反}',
  },
  {
    id: 'ti-sd-3',
    question: 'tan 15° 的精确值是',
    questionLatex: '\\tan 15° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '2+\\sqrt{3}', isLatex: true },
      { label: 'B', value: '2-\\sqrt{3}', isLatex: true },
      { label: 'C', value: '\\sqrt{3}-1', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{3}}{3}', isLatex: true },
    ],
    correctAnswer: '2-\\sqrt{3}',
    explanation: '',
    explanationLatex: '\\textbf{第①步 凑角：}15°=45°-30°\\\\[4pt]\\textbf{第②步 套正切差角公式：}\\\\[2pt]\\tan 15°=\\dfrac{\\tan 45°-\\tan 30°}{1+\\tan 45°\\cdot\\tan 30°}=\\dfrac{1-\\frac{\\sqrt{3}}{3}}{1+1\\cdot\\frac{\\sqrt{3}}{3}}\\\\[4pt]\\textbf{第③步 通分化简：}\\\\[2pt]=\\dfrac{\\frac{3-\\sqrt{3}}{3}}{\\frac{3+\\sqrt{3}}{3}}=\\dfrac{3-\\sqrt{3}}{3+\\sqrt{3}}\\\\[4pt]\\textbf{有理化：}\\times\\dfrac{3-\\sqrt{3}}{3-\\sqrt{3}}=\\dfrac{(3-\\sqrt{3})^2}{9-3}=\\dfrac{12-6\\sqrt{3}}{6}=2-\\sqrt{3}',
  },
  {
    id: 'ti-sd-4',
    question: '已知 sinα = 4/5，cosβ = 5/13（α、β 均为第一象限角），则 sin(α+β) =',
    questionLatex: '\\text{已知 }\\sin\\alpha=\\dfrac{4}{5},\\;\\cos\\beta=\\dfrac{5}{13}\\text{（α、β 均为一象限角），则 }\\sin(\\alpha+\\beta)=',
    options: [
      { label: 'A', value: '\\dfrac{56}{65}', isLatex: true },
      { label: 'B', value: '\\dfrac{63}{65}', isLatex: true },
      { label: 'C', value: '\\dfrac{33}{65}', isLatex: true },
      { label: 'D', value: '\\dfrac{16}{65}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{56}{65}',
    explanation: '',
    explanationLatex: '\\textbf{第①步 补全}（用 \\sin^2+\\cos^2=1，一象限取正）\\textbf{：}\\\\[2pt]\\cos\\alpha=\\sqrt{1-\\frac{16}{25}}=\\dfrac{3}{5},\\;\\sin\\beta=\\sqrt{1-\\frac{25}{169}}=\\dfrac{12}{13}\\\\[4pt]\\textbf{第②步 套正弦和角公式：}\\\\[2pt]\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\\\[2pt]=\\dfrac{4}{5}\\cdot\\dfrac{5}{13}+\\dfrac{3}{5}\\cdot\\dfrac{12}{13}=\\dfrac{20}{65}+\\dfrac{36}{65}=\\boxed{\\dfrac{56}{65}}',
  },
  {
    id: 'ti-sd-5',
    question: 'cos 105° 的精确值是',
    questionLatex: '\\cos 105° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{2}-\\sqrt{6}}{4}', isLatex: true },
      { label: 'C', value: '-\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{2}-\\sqrt{6}}{4}',
    explanation: '',
    explanationLatex: '\\textbf{第①步 凑角：}105°=60°+45°\\\\[4pt]\\textbf{第②步 套余弦和角公式}（注意 + 号变 -）\\textbf{：}\\\\[2pt]\\cos 105°=\\cos 60°\\cos 45°{\\color{red}-}\\sin 60°\\sin 45°\\\\[4pt]\\textbf{第③步 代入：}\\\\[2pt]=\\dfrac{1}{2}\\cdot\\dfrac{\\sqrt{2}}{2}-\\dfrac{\\sqrt{3}}{2}\\cdot\\dfrac{\\sqrt{2}}{2}=\\dfrac{\\sqrt{2}}{4}-\\dfrac{\\sqrt{6}}{4}=\\boxed{\\dfrac{\\sqrt{2}-\\sqrt{6}}{4}}\\\\[4pt]\\textbf{易错点：}\\cos(\\alpha+\\beta)\\text{ 中间是减号！}',
  },
];

/** 二倍角公式即时训练（2 题） */
export const doubleAnglePractice: QuizQuestionData[] = [
  {
    id: 'ti-da-1',
    question: '已知 sinα = 3/5（α 为第一象限角），则 sin2α 和 cos2α 分别是',
    questionLatex: '\\text{已知 }\\sin\\alpha=\\dfrac{3}{5}\\text{（一象限角），则 }\\sin 2\\alpha,\\;\\cos 2\\alpha\\text{ 分别是}',
    options: [
      { label: 'A', value: '\\dfrac{24}{25},\\;\\dfrac{7}{25}', isLatex: true },
      { label: 'B', value: '\\dfrac{24}{25},\\;\\dfrac{9}{25}', isLatex: true },
      { label: 'C', value: '\\dfrac{12}{25},\\;\\dfrac{7}{25}', isLatex: true },
      { label: 'D', value: '\\dfrac{6}{5},\\;\\dfrac{7}{25}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{24}{25},\\;\\dfrac{7}{25}',
    explanation: '',
    explanationLatex: '\\textbf{第①步 补全：}\\text{一象限 }\\cos\\alpha>0\\;\\Rightarrow\\;\\cos\\alpha=\\sqrt{1-\\frac{9}{25}}=\\dfrac{4}{5}\\\\[4pt]\\textbf{第②步 sin2α：}\\\\[2pt]\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha=2\\cdot\\dfrac{3}{5}\\cdot\\dfrac{4}{5}=\\boxed{\\dfrac{24}{25}}\\\\[4pt]\\textbf{第③步 cos2α}（用形式① cos²α−sin²α）\\textbf{：}\\\\[2pt]\\cos 2\\alpha=\\left(\\dfrac{4}{5}\\right)^2-\\left(\\dfrac{3}{5}\\right)^2=\\dfrac{16}{25}-\\dfrac{9}{25}=\\boxed{\\dfrac{7}{25}}',
  },
  {
    id: 'ti-da-2',
    question: '化简 cos²15° − sin²15° + 2sin22.5°cos22.5° =',
    questionLatex: '\\cos^2 15° - \\sin^2 15° + 2\\sin 22.5°\\cos 22.5° =',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{3}+\\sqrt{2}}{2}', isLatex: true },
      { label: 'B', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'C', value: '1+\\dfrac{\\sqrt{2}}{2}', isLatex: true },
      { label: 'D', value: '\\sqrt{3}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{\\sqrt{3}+\\sqrt{2}}{2}',
    explanation: '',
    explanationLatex: '\\textbf{逆用二倍角公式：}\\\\[4pt]\\textbf{前半：}\\cos^2 15°-\\sin^2 15°=\\cos(2\\times 15°)=\\cos 30°=\\dfrac{\\sqrt{3}}{2}\\\\[4pt]\\textbf{后半：}2\\sin 22.5°\\cos 22.5°=\\sin(2\\times 22.5°)=\\sin 45°=\\dfrac{\\sqrt{2}}{2}\\\\[4pt]\\textbf{合计：}\\dfrac{\\sqrt{3}}{2}+\\dfrac{\\sqrt{2}}{2}=\\boxed{\\dfrac{\\sqrt{3}+\\sqrt{2}}{2}}\\\\[4pt]\\textbf{关键：}\\text{看到 }\\cos^2\\alpha-\\sin^2\\alpha\\text{ → 逆用为 }\\cos 2\\alpha\\text{；看到 }2\\sin\\alpha\\cos\\alpha\\text{ → 逆用为 }\\sin 2\\alpha',
  },
];

/** 降幂公式即时训练（4 题） */
export const powerReductionPractice: QuizQuestionData[] = [
  {
    id: 'ti-pr-1',
    question: 'sin²15° 的精确值是',
    questionLatex: '\\sin^2 15° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{2-\\sqrt{3}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{2+\\sqrt{3}}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{1}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{3}}{4}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{2-\\sqrt{3}}{4}',
    explanation: '',
    explanationLatex: '\\textbf{套降幂公式 }\\sin^2\\alpha=\\dfrac{1-\\cos 2\\alpha}{2}\\textbf{：}\\\\[4pt]\\sin^2 15°=\\dfrac{1-\\cos 30°}{2}=\\dfrac{1-\\frac{\\sqrt{3}}{2}}{2}=\\dfrac{\\frac{2-\\sqrt{3}}{2}}{2}=\\boxed{\\dfrac{2-\\sqrt{3}}{4}}\\\\[4pt]\\textbf{口诀：}\\text{sin² → "1减"除以2}',
  },
  {
    id: 'ti-pr-2',
    question: 'cos²75° 的精确值是',
    questionLatex: '\\cos^2 75° \\text{ 的精确值是}',
    options: [
      { label: 'A', value: '\\dfrac{2-\\sqrt{3}}{4}', isLatex: true },
      { label: 'B', value: '\\dfrac{2+\\sqrt{3}}{4}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}}{4}', isLatex: true },
      { label: 'D', value: '\\dfrac{1}{4}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{2-\\sqrt{3}}{4}',
    explanation: '',
    explanationLatex: '\\textbf{套降幂公式 }\\cos^2\\alpha=\\dfrac{1+\\cos 2\\alpha}{2}\\textbf{：}\\\\[4pt]\\cos^2 75°=\\dfrac{1+\\cos 150°}{2}\\\\[4pt]\\textbf{注意：}\\cos 150°=\\cos(180°-30°)=-\\cos 30°=-\\dfrac{\\sqrt{3}}{2}\\\\[4pt]=\\dfrac{1+(-\\frac{\\sqrt{3}}{2})}{2}=\\dfrac{1-\\frac{\\sqrt{3}}{2}}{2}=\\boxed{\\dfrac{2-\\sqrt{3}}{4}}\\\\[4pt]\\textbf{口诀：}\\text{cos² → "1加"除以2（但 cos150° 是负数！）}',
  },
  {
    id: 'ti-pr-3',
    question: '化简 2cos²α − 1 =',
    questionLatex: '2\\cos^2\\alpha - 1 =',
    options: [
      { label: 'A', value: '\\cos 2\\alpha', isLatex: true },
      { label: 'B', value: '\\sin 2\\alpha', isLatex: true },
      { label: 'C', value: '1', isLatex: false },
      { label: 'D', value: '-\\cos 2\\alpha', isLatex: true },
    ],
    correctAnswer: '\\cos 2\\alpha',
    explanation: '',
    explanationLatex: '\\textbf{方法：降幂公式反过来用}\\\\[4pt]\\text{降幂公式：}\\cos^2\\alpha=\\dfrac{1+\\cos 2\\alpha}{2}\\\\[4pt]\\text{两边乘2：}2\\cos^2\\alpha=1+\\cos 2\\alpha\\\\[4pt]\\text{移项：}2\\cos^2\\alpha-1=\\boxed{\\cos 2\\alpha}\\\\[4pt]\\textbf{这就是二倍角 cos 的形式②！正用降幂，反用升角}',
  },
  {
    id: 'ti-pr-4',
    question: '化简 1 − 2sin²(π/8) =',
    questionLatex: '1 - 2\\sin^2\\dfrac{\\pi}{8} =',
    options: [
      { label: 'A', value: '\\dfrac{\\sqrt{2}}{2}', isLatex: true },
      { label: 'B', value: '\\dfrac{1}{2}', isLatex: true },
      { label: 'C', value: '\\dfrac{\\sqrt{3}}{2}', isLatex: true },
      { label: 'D', value: '0', isLatex: false },
    ],
    correctAnswer: '\\dfrac{\\sqrt{2}}{2}',
    explanation: '',
    explanationLatex: '\\textbf{识别公式：}1-2\\sin^2\\alpha=\\cos 2\\alpha\\text{（二倍角 cos 形式③）}\\\\[4pt]\\textbf{代入 }\\alpha=\\dfrac{\\pi}{8}\\textbf{：}\\\\[2pt]1-2\\sin^2\\dfrac{\\pi}{8}=\\cos\\left(2\\cdot\\dfrac{\\pi}{8}\\right)=\\cos\\dfrac{\\pi}{4}=\\boxed{\\dfrac{\\sqrt{2}}{2}}\\\\[4pt]\\textbf{关键：}\\text{看到 }1-2\\sin^2(\\text{某角})\\text{ → 直接等于 }\\cos(\\text{两倍某角})',
  },
];

/** 半角公式即时训练（3 题） */
export const halfAnglePractice: QuizQuestionData[] = [
  {
    id: 'ti-ha-1',
    question: '已知 cosα = 7/25 且 α/2 ∈ (0, π/2)，则 sin(α/2) =',
    questionLatex: '\\text{已知 }\\cos\\alpha=\\dfrac{7}{25}\\text{ 且 }\\dfrac{\\alpha}{2}\\in\\left(0,\\dfrac{\\pi}{2}\\right)\\text{，则 }\\sin\\dfrac{\\alpha}{2}=',
    options: [
      { label: 'A', value: '\\dfrac{3}{5}', isLatex: true },
      { label: 'B', value: '\\dfrac{4}{5}', isLatex: true },
      { label: 'C', value: '\\dfrac{3}{25}', isLatex: true },
      { label: 'D', value: '\\dfrac{9}{25}', isLatex: true },
    ],
    correctAnswer: '\\dfrac{3}{5}',
    explanation: '',
    explanationLatex: '\\textbf{第①步 判象限定正负：}\\dfrac{\\alpha}{2}\\in(0,\\dfrac{\\pi}{2})\\text{（一象限）}\\;\\Rightarrow\\;\\sin\\dfrac{\\alpha}{2}>0\\text{，取正号}\\\\[4pt]\\textbf{第②步 套半角公式：}\\\\[2pt]\\sin\\dfrac{\\alpha}{2}=+\\sqrt{\\dfrac{1-\\cos\\alpha}{2}}=\\sqrt{\\dfrac{1-\\frac{7}{25}}{2}}=\\sqrt{\\dfrac{\\frac{18}{25}}{2}}=\\sqrt{\\dfrac{18}{50}}=\\sqrt{\\dfrac{9}{25}}=\\boxed{\\dfrac{3}{5}}',
  },
  {
    id: 'ti-ha-2',
    question: 'tan15° 用半角公式计算等于',
    questionLatex: '\\tan 15° \\text{ 用半角公式计算等于}',
    options: [
      { label: 'A', value: '2-\\sqrt{3}', isLatex: true },
      { label: 'B', value: '2+\\sqrt{3}', isLatex: true },
      { label: 'C', value: '\\sqrt{3}-1', isLatex: true },
      { label: 'D', value: '\\dfrac{\\sqrt{3}}{3}', isLatex: true },
    ],
    correctAnswer: '2-\\sqrt{3}',
    explanation: '',
    explanationLatex: '\\textbf{思路：}15°=\\dfrac{30°}{2}\\text{，用 tan 的半角公式（不带±的那个）}\\\\[4pt]\\textbf{公式：}\\tan\\dfrac{\\alpha}{2}=\\dfrac{1-\\cos\\alpha}{\\sin\\alpha}\\\\[4pt]\\textbf{代入 }\\alpha=30°\\textbf{：}\\\\[2pt]\\tan 15°=\\dfrac{1-\\cos 30°}{\\sin 30°}=\\dfrac{1-\\frac{\\sqrt{3}}{2}}{\\frac{1}{2}}=\\dfrac{\\frac{2-\\sqrt{3}}{2}}{\\frac{1}{2}}=\\boxed{2-\\sqrt{3}}\\\\[4pt]\\textbf{技巧：}\\text{tan 半角用 }\\dfrac{1-\\cos\\alpha}{\\sin\\alpha}\\text{ 或 }\\dfrac{\\sin\\alpha}{1+\\cos\\alpha}\\text{，不用判正负}',
  },
  {
    id: 'ti-ha-3',
    question: '已知 cosα = −1/2 且 α/2 ∈ (π/2, π)，则 cos(α/2) 的符号是',
    questionLatex: '\\text{已知 }\\cos\\alpha=-\\dfrac{1}{2}\\text{ 且 }\\dfrac{\\alpha}{2}\\in\\left(\\dfrac{\\pi}{2},\\pi\\right)\\text{，则 }\\cos\\dfrac{\\alpha}{2}\\text{ 的符号是}',
    options: [
      { label: 'A', value: '正', isLatex: false },
      { label: 'B', value: '负', isLatex: false },
      { label: 'C', value: '零', isLatex: false },
      { label: 'D', value: '无法确定', isLatex: false },
    ],
    correctAnswer: '负',
    explanation: '',
    explanationLatex: '\\textbf{第①步 看 α/2 在哪个象限：}\\\\[2pt]\\dfrac{\\alpha}{2}\\in\\left(\\dfrac{\\pi}{2},\\pi\\right)\\text{ → 第二象限}\\\\[4pt]\\textbf{第②步 回忆各象限三角函数符号：}\\\\[2pt]\\text{第二象限：sin > 0，cos < 0，tan < 0}\\\\[4pt]\\textbf{结论：}\\cos\\dfrac{\\alpha}{2}<0\\text{，取}\\boxed{\\text{负}}\\text{号}\\\\[4pt]\\textbf{口诀：}\\text{半角公式先判象限定正负，再套公式算数值}',
    printCols: 4,
  },
];

/** 辅助角公式即时训练（5 题） */
export const auxiliaryPractice: QuizQuestionData[] = [
  {
    id: 'ti-aux-1',
    question: '√3 sin x + cos x 化为 R sin(x+φ) 的结果是',
    questionLatex: '\\sqrt{3}\\sin x + \\cos x \\text{ 化为 }R\\sin(x+\\varphi)\\text{ 的结果是}',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'C', value: '\\sqrt{2}\\sin\\!\\left(x+\\dfrac{\\pi}{4}\\right)', isLatex: true },
      { label: 'D', value: '2\\sin\\!\\left(x-\\dfrac{\\pi}{6}\\right)', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)',
    explanation: '',
    explanationLatex: '\\textbf{第①步 识别：}a=\\sqrt{3}\\text{（sin系数）},\\;b=1\\text{（cos系数）}\\\\[4pt]\\textbf{第②步 求振幅：}R=\\sqrt{a^2+b^2}=\\sqrt{3+1}=2\\\\[4pt]\\textbf{第③步 求φ：}\\cos\\varphi=\\dfrac{a}{R}=\\dfrac{\\sqrt{3}}{2},\\;\\sin\\varphi=\\dfrac{b}{R}=\\dfrac{1}{2}\\\\[2pt]\\Rightarrow\\;\\varphi=\\dfrac{\\pi}{6}\\\\[4pt]\\textbf{结果：}\\boxed{2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)}',
  },
  {
    id: 'ti-aux-2',
    question: 'sin x − √3 cos x 化为 R sin(x+φ) 的结果是',
    questionLatex: '\\sin x - \\sqrt{3}\\cos x \\text{ 化为 }R\\sin(x+\\varphi)\\text{ 的结果是}',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(x-\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'C', value: '2\\sin\\!\\left(x-\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'D', value: '2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(x-\\dfrac{\\pi}{3}\\right)',
    explanation: '',
    explanationLatex: '\\textbf{第①步 识别}（注意负号！）\\textbf{：}a=1,\\;b={\\color{red}-\\sqrt{3}}\\\\[4pt]\\textbf{第②步 求振幅：}R=\\sqrt{1+3}=2\\\\[4pt]\\textbf{第③步 求φ：}\\cos\\varphi=\\dfrac{1}{2},\\;\\sin\\varphi=\\dfrac{-\\sqrt{3}}{2}\\\\[2pt]\\text{cosφ>0 且 sinφ<0 → φ 在第四象限 → }\\varphi=-\\dfrac{\\pi}{3}\\\\[4pt]\\textbf{结果：}\\boxed{2\\sin\\!\\left(x-\\dfrac{\\pi}{3}\\right)}\\\\[4pt]\\textbf{易错点：}b=-\\sqrt{3}\\text{ 不是 }\\sqrt{3}\\text{！负号不能丢}',
  },
  {
    id: 'ti-aux-3',
    question: '√3 sin 2x − cos 2x 化为 R sin(2x+φ) 的结果是',
    questionLatex: '\\sqrt{3}\\sin 2x - \\cos 2x \\text{ 化为 }R\\sin(2x+\\varphi)\\text{ 的结果是}',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'C', value: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'D', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)',
    explanation: '',
    explanationLatex: '\\textbf{第①步 识别}（ω=2 保持不变！）\\textbf{：}a=\\sqrt{3},\\;b=-1\\\\[4pt]\\textbf{第②步 求振幅：}R=\\sqrt{3+1}=2\\\\[4pt]\\textbf{第③步 求φ：}\\cos\\varphi=\\dfrac{\\sqrt{3}}{2},\\;\\sin\\varphi=-\\dfrac{1}{2}\\;\\Rightarrow\\;\\varphi=-\\dfrac{\\pi}{6}\\\\[4pt]\\textbf{结果：}\\boxed{2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)}\\\\[4pt]\\textbf{注意：}\\text{是 }2x\\text{ 不是 }x\\text{！ω 不能丢}',
  },
  {
    id: 'ti-aux-4',
    question: 'f(x) = sin x − cos x 的一个单调递增区间是',
    questionLatex: 'f(x) = \\sin x - \\cos x \\text{ 的一个单调递增区间是}',
    options: [
      { label: 'A', value: '\\left[-\\dfrac{3\\pi}{4},\\;\\dfrac{\\pi}{4}\\right]', isLatex: true },
      { label: 'B', value: '\\left[-\\dfrac{\\pi}{4},\\;\\dfrac{3\\pi}{4}\\right]', isLatex: true },
      { label: 'C', value: '\\left[\\dfrac{\\pi}{4},\\;\\dfrac{5\\pi}{4}\\right]', isLatex: true },
      { label: 'D', value: '\\left[-\\dfrac{\\pi}{2},\\;\\dfrac{\\pi}{2}\\right]', isLatex: true },
    ],
    correctAnswer: '\\left[-\\dfrac{3\\pi}{4},\\;\\dfrac{\\pi}{4}\\right]',
    explanation: '',
    explanationLatex: '\\textbf{第①步 辅助角化简：}a=1,\\;b=-1\\;\\Rightarrow\\;R=\\sqrt{2},\\;\\varphi=-\\dfrac{\\pi}{4}\\\\[2pt]f(x)=\\sqrt{2}\\sin\\!\\left(x-\\dfrac{\\pi}{4}\\right)\\\\[4pt]\\textbf{第②步 求递增区间}（令 sin 的内层在 [-π/2, π/2]）\\textbf{：}\\\\[2pt]-\\dfrac{\\pi}{2}\\leq x-\\dfrac{\\pi}{4}\\leq\\dfrac{\\pi}{2}\\\\[4pt]\\textbf{第③步 解出 x：}\\\\[2pt]-\\dfrac{\\pi}{2}+\\dfrac{\\pi}{4}\\leq x\\leq\\dfrac{\\pi}{2}+\\dfrac{\\pi}{4}\\;\\Rightarrow\\;\\boxed{-\\dfrac{3\\pi}{4}\\leq x\\leq\\dfrac{\\pi}{4}}',
  },
  {
    id: 'ti-aux-5',
    question: '（高考真题改编）f(x) = 2sin²x + 2√3 sinxcosx − 1 化简后等于',
    questionLatex: '\\text{（真题改编）}f(x) = 2\\sin^2 x + 2\\sqrt{3}\\sin x\\cos x - 1 \\text{ 化简后等于}',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'C', value: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'D', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)',
    explanation: '',
    explanationLatex: '\\textbf{第①步 降幂 + 二倍角：}\\\\[2pt]2\\sin^2 x=1-\\cos 2x\\text{（降幂公式）}\\\\[2pt]2\\sqrt{3}\\sin x\\cos x=\\sqrt{3}\\cdot 2\\sin x\\cos x=\\sqrt{3}\\sin 2x\\\\[4pt]\\textbf{第②步 合并：}\\\\[2pt]f(x)=(1-\\cos 2x)+\\sqrt{3}\\sin 2x-1=\\sqrt{3}\\sin 2x-\\cos 2x\\\\[4pt]\\textbf{第③步 辅助角：}a=\\sqrt{3},\\;b=-1\\;\\Rightarrow\\;R=2\\\\[2pt]\\cos\\varphi=\\dfrac{\\sqrt{3}}{2},\\;\\sin\\varphi=-\\dfrac{1}{2}\\;\\Rightarrow\\;\\varphi=-\\dfrac{\\pi}{6}\\\\[4pt]\\textbf{结果：}\\boxed{2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)}',
  },
];

/** 综合应用即时训练（5 题） */
export const comprehensivePractice: QuizQuestionData[] = [
  {
    id: 'ti-comp-1',
    question: '已知 sinα = 4/5（α 为第二象限角），则 sin2α =',
    questionLatex: '\\text{已知 }\\sin\\alpha=\\dfrac{4}{5}\\text{（α 为二象限角），则 }\\sin 2\\alpha=',
    options: [
      { label: 'A', value: '-\\dfrac{24}{25}', isLatex: true },
      { label: 'B', value: '\\dfrac{24}{25}', isLatex: true },
      { label: 'C', value: '-\\dfrac{12}{25}', isLatex: true },
      { label: 'D', value: '\\dfrac{12}{25}', isLatex: true },
    ],
    correctAnswer: '-\\dfrac{24}{25}',
    explanation: '',
    explanationLatex: '\\textbf{第①步 补全}（二象限 cosα<0）\\textbf{：}\\\\[2pt]\\cos\\alpha=-\\sqrt{1-\\frac{16}{25}}=-\\dfrac{3}{5}\\\\[4pt]\\textbf{第②步 套二倍角 sin：}\\\\[2pt]\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha=2\\cdot\\dfrac{4}{5}\\cdot\\left(-\\dfrac{3}{5}\\right)=\\boxed{-\\dfrac{24}{25}}\\\\[4pt]\\textbf{易错点：}\\text{二象限 cosα 是负数！别忘了负号}',
  },
  {
    id: 'ti-comp-2',
    question: '已知 α+β = π/4，则 (1+tanα)(1+tanβ) =',
    questionLatex: '\\text{已知 }\\alpha+\\beta=\\dfrac{\\pi}{4}\\text{，则 }(1+\\tan\\alpha)(1+\\tan\\beta)=',
    options: [
      { label: 'A', value: '1', isLatex: false },
      { label: 'B', value: '2', isLatex: false },
      { label: 'C', value: '3', isLatex: false },
      { label: 'D', value: '\\sqrt{2}', isLatex: true },
    ],
    correctAnswer: '2',
    explanation: '',
    explanationLatex: '\\textbf{第①步 利用已知条件：}\\\\[2pt]\\alpha+\\beta=\\dfrac{\\pi}{4}\\;\\Rightarrow\\;\\tan(\\alpha+\\beta)=\\tan\\dfrac{\\pi}{4}=1\\\\[4pt]\\textbf{第②步 展开正切和角公式：}\\\\[2pt]\\dfrac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}=1\\;\\Rightarrow\\;\\tan\\alpha+\\tan\\beta=1-\\tan\\alpha\\tan\\beta\\quad\\cdots(*)\\\\[4pt]\\textbf{第③步 展开目标式并代入(*)：}\\\\[2pt](1+\\tan\\alpha)(1+\\tan\\beta)=1+\\tan\\alpha+\\tan\\beta+\\tan\\alpha\\tan\\beta\\\\[2pt]\\xlongequal{\\text{代入(*)}}1+(1-\\tan\\alpha\\tan\\beta)+\\tan\\alpha\\tan\\beta=\\boxed{2}',
    printCols: 4,
  },
  {
    id: 'ti-comp-3',
    question: '化简 2sinxcosx + 2√3cos²x − √3 =',
    questionLatex: '2\\sin x\\cos x + 2\\sqrt{3}\\cos^2 x - \\sqrt{3} =',
    options: [
      { label: 'A', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)', isLatex: true },
      { label: 'B', value: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'C', value: '2\\cos\\!\\left(2x+\\dfrac{\\pi}{6}\\right)', isLatex: true },
      { label: 'D', value: '\\sin 2x+\\sqrt{3}\\cos 2x', isLatex: true },
    ],
    correctAnswer: '2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)',
    explanation: '',
    explanationLatex: '\\textbf{第①步 二倍角化简：}\\\\[2pt]2\\sin x\\cos x=\\sin 2x\\\\[2pt]2\\sqrt{3}\\cos^2 x=\\sqrt{3}\\cdot 2\\cos^2 x=\\sqrt{3}(1+\\cos 2x)=\\sqrt{3}+\\sqrt{3}\\cos 2x\\\\[4pt]\\textbf{第②步 合并：}\\\\[2pt]=\\sin 2x+\\sqrt{3}+\\sqrt{3}\\cos 2x-\\sqrt{3}=\\sin 2x+\\sqrt{3}\\cos 2x\\\\[4pt]\\textbf{第③步 辅助角：}a=1,\\;b=\\sqrt{3}\\;\\Rightarrow\\;R=2,\\;\\varphi=\\dfrac{\\pi}{3}\\\\[4pt]\\textbf{结果：}\\boxed{2\\sin\\!\\left(2x+\\dfrac{\\pi}{3}\\right)}',
  },
  {
    id: 'ti-comp-4',
    question: 'f(x) = 2sin²x + 2√3 sinxcosx 的最小正周期和最大值分别是',
    questionLatex: 'f(x)=2\\sin^2 x+2\\sqrt{3}\\sin x\\cos x \\text{ 的最小正周期和最大值分别是}',
    options: [
      { label: 'A', value: '\\pi,\\;2', isLatex: true },
      { label: 'B', value: '\\pi,\\;3', isLatex: true },
      { label: 'C', value: '2\\pi,\\;2', isLatex: true },
      { label: 'D', value: '2\\pi,\\;3', isLatex: true },
    ],
    correctAnswer: '\\pi,\\;3',
    explanation: '',
    explanationLatex: '\\textbf{第①步 降幂 + 二倍角：}\\\\[2pt]2\\sin^2 x=1-\\cos 2x,\\;2\\sqrt{3}\\sin x\\cos x=\\sqrt{3}\\sin 2x\\\\[4pt]\\textbf{第②步 合并：}f(x)=1+\\sqrt{3}\\sin 2x-\\cos 2x\\\\[4pt]\\textbf{第③步 辅助角：}a=\\sqrt{3},\\;b=-1\\;\\Rightarrow\\;R=2\\\\[2pt]f(x)=1+2\\sin\\!\\left(2x-\\dfrac{\\pi}{6}\\right)\\\\[4pt]\\textbf{第④步 求周期和最值：}\\\\[2pt]T=\\dfrac{2\\pi}{\\omega}=\\dfrac{2\\pi}{2}=\\boxed{\\pi}\\\\[2pt]\\text{sin 最大=1 → }f_{\\max}=1+2=\\boxed{3}',
  },
  {
    id: 'ti-comp-5',
    question: '（真题改编）f(x) = 2sin(2x+π/6) 在 [0,π] 上的单调递增区间是',
    questionLatex: '\\text{（真题改编）}f(x)=2\\sin\\!\\left(2x+\\dfrac{\\pi}{6}\\right)\\text{ 在 }[0,\\pi]\\text{ 上的单调递增区间是}',
    options: [
      { label: 'A', value: '\\left[0,\\;\\dfrac{\\pi}{6}\\right]', isLatex: true },
      { label: 'B', value: '\\left[\\dfrac{\\pi}{6},\\;\\dfrac{2\\pi}{3}\\right]', isLatex: true },
      { label: 'C', value: '\\left[0,\\;\\dfrac{\\pi}{3}\\right]', isLatex: true },
      { label: 'D', value: '\\left[\\dfrac{\\pi}{3},\\;\\dfrac{5\\pi}{6}\\right]', isLatex: true },
    ],
    correctAnswer: '\\left[0,\\;\\dfrac{\\pi}{6}\\right]',
    explanation: '',
    explanationLatex: '\\textbf{第①步 写出一般递增条件：}\\\\[2pt]\\sin u\\text{ 在 }-\\dfrac{\\pi}{2}\\leq u\\leq\\dfrac{\\pi}{2}\\text{ 上递增}\\\\[4pt]\\textbf{第②步 令 }u=2x+\\dfrac{\\pi}{6}\\textbf{，列不等式：}\\\\[2pt]-\\dfrac{\\pi}{2}\\leq 2x+\\dfrac{\\pi}{6}\\leq\\dfrac{\\pi}{2}\\\\[4pt]\\textbf{第③步 解出 x：}\\\\[2pt]-\\dfrac{\\pi}{2}-\\dfrac{\\pi}{6}\\leq 2x\\leq\\dfrac{\\pi}{2}-\\dfrac{\\pi}{6}\\;\\Rightarrow\\;-\\dfrac{\\pi}{3}\\leq x\\leq\\dfrac{\\pi}{6}\\\\[4pt]\\textbf{第④步 与 [0,π] 取交集：}\\\\[2pt]\\left[-\\dfrac{\\pi}{3},\\dfrac{\\pi}{6}\\right]\\cap[0,\\pi]=\\boxed{\\left[0,\\;\\dfrac{\\pi}{6}\\right]}',
  },
];