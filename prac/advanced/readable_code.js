const MAX_COUNT = 100;

function double(a) {
  if (a > MAX_COUNT) {
    return a;
  } else {
    return a * 2
  }
};

double(15);


// https://ts-ast-viewer.com/#code/MYewdgzgLgBAsgQQBoH0DCB5AqgOQCowC8MAjAAxkDcAUNQGYCuYwUAluDACYgMBGANgFMAFAEMAlDADe1GDFZ0YYmAD54ydNnySZcuQCdBUBvrAxRNOQF8Yg-hEHTZew8dPmYAKhgAmZ1eorGmpuPiFhEgBWcUogA
// [
//   factory.createVariableStatement(
//     undefined,
//     factory.createVariableDeclarationList(
//       [factory.createVariableDeclaration(
//         factory.createIdentifier("MAX_COUNT"),
//         undefined,
//         undefined,
//         factory.createNumericLiteral("100")
//       )],
//       ts.NodeFlags.Const
//     )
//   ),
//   factory.createFunctionDeclaration(
//     undefined,
//     undefined,
//     undefined,
//     factory.createIdentifier("double"),
//     undefined,
//     [factory.createParameterDeclaration(
//       undefined,
//       undefined,
//       undefined,
//       factory.createIdentifier("a"),
//       undefined,
//       undefined,
//       undefined
//     )],
//     undefined,
//     factory.createBlock(
//       [factory.createIfStatement(
//         factory.createBinaryExpression(
//           factory.createIdentifier("a"),
//           factory.createToken(ts.SyntaxKind.GreaterThanToken),
//           factory.createIdentifier("MAX_COUNT")
//         ),
//         factory.createBlock(
//           [factory.createReturnStatement(factory.createIdentifier("a"))],
//           true
//         ),
//         factory.createBlock(
//           [factory.createReturnStatement(factory.createBinaryExpression(
//             factory.createIdentifier("a"),
//             factory.createToken(ts.SyntaxKind.AsteriskToken),
//             factory.createNumericLiteral("2")
//           ))],
//           true
//         )
//       )],
//       true
//     )
//   ),
//   factory.createEmptyStatement(),
//   factory.createExpressionStatement(factory.createCallExpression(
//     factory.createIdentifier("double"),
//     undefined,
//     [factory.createNumericLiteral("15")]
//   ))
// ];
