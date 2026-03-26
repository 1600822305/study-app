import type { EssayQuestion } from '@/components/shared/ExamPaper';

// ── 7.2 空间向量法 训练题（4 道大题，覆盖全部知识点） ──
// 答案与解析在 geo3d-vector-answers.tsx 中，此文件只存题目数据

export const geo3dVectorEssayQuestions: EssayQuestion[] = [
  // 大题1（证垂直 + 求二面角）
  {
    id: 'g3v-essay-1',
    questionLatex:
      '\\text{四棱锥 } P\\text{-}ABCD \\text{ 中，底面 } ABCD \\text{ 是正方形，}' +
      'PA \\perp \\text{底面，} PA = AB = 2\\text{。}\\\\[6pt]' +
      '\\text{（1）证明：} BD \\perp \\text{面 } PAC\\text{；}\\\\[4pt]' +
      '\\text{（2）求二面角 } P\\text{-}BC\\text{-}A \\text{ 的余弦值。}',
    score: 12,
    lines: 18,
  },
  // 大题2（证平行 + 求线面角）
  {
    id: 'g3v-essay-2',
    questionLatex:
      '\\text{四棱锥 } P\\text{-}ABCD \\text{ 中，底面 } ABCD \\text{ 是正方形，}' +
      'PA \\perp \\text{底面，} PA = AB = 2\\text{，} E \\text{ 是 } PC \\text{ 的中点。}\\\\[6pt]' +
      '\\text{（1）证明：} PA \\parallel \\text{面 } BDE\\text{；}\\\\[4pt]' +
      '\\text{（2）求直线 } BE \\text{ 与底面 } ABCD \\text{ 所成角的正弦值。}',
    score: 12,
    lines: 18,
  },
  // 大题3（求线线角 + 求点到面距离）
  {
    id: 'g3v-essay-3',
    questionLatex:
      '\\text{正方体 } ABCD\\text{-}A_1B_1C_1D_1\\text{，棱长为 } 2\\text{，}' +
      'E \\text{ 是 } DD_1 \\text{ 的中点。}\\\\[6pt]' +
      '\\text{（1）求异面直线 } AE \\text{ 与 } B_1C \\text{ 所成角的余弦值；}\\\\[4pt]' +
      '\\text{（2）求点 } B \\text{ 到平面 } AEC_1 \\text{ 的距离。}',
    score: 12,
    lines: 18,
  },
  // 大题4（证线∥线 + 证线⊥线）
  {
    id: 'g3v-essay-4',
    questionLatex:
      '\\text{三棱柱 } ABC\\text{-}A_1B_1C_1 \\text{ 中，侧棱垂直于底面，}' +
      '\\angle ABC = 90^\\circ\\text{，} AB = BC = BB_1 = 2\\text{，}' +
      'E \\text{ 是 } AA_1 \\text{ 的中点，} F \\text{ 是 } CC_1 \\text{ 的中点。}\\\\[6pt]' +
      '\\text{（1）证明：} EF \\parallel AC\\text{；}\\\\[4pt]' +
      '\\text{（2）证明：} AB_1 \\perp A_1C\\text{。}',
    score: 12,
    lines: 18,
  },
];
