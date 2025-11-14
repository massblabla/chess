namespace SpriteKind {
    export const Move = SpriteKind.create();
    export const Check = SpriteKind.create();
    export const Mark = SpriteKind.create();
    export const Piece = SpriteKind.create();
}

// Stage counter
let stage = 0;
// Move array
let moves = [];
// Moves count
let movesCount = moves.length;
// Score counter
let whiteScore = 0;
let blackScore = 0;

// Pieces
let bra: Sprite, bnb: Sprite, bbc: Sprite, bqd: Sprite, bke: Sprite, bbf: Sprite, bng: Sprite, brh: Sprite; 
let bpa: Sprite, bpb: Sprite, bpc: Sprite, bpd: Sprite, bpe: Sprite, bpf: Sprite, bpg: Sprite, bph: Sprite;
let wra: Sprite, wnb: Sprite, wbc: Sprite, wqd: Sprite, wke: Sprite, wbf: Sprite, wng: Sprite, wrh: Sprite;
let wpa: Sprite, wpb: Sprite, wpc: Sprite, wpd: Sprite, wpe: Sprite, wpf: Sprite, wpg: Sprite, wph: Sprite;

// Selectors
let selector1: Sprite, selector2: Sprite;

// Board positions
const top = 29;
const left = 8;
const t = 15;

const pos = {
    // Rank 8
    a8: { y: left + t * 0, x: top + t * 0 }, b8: { y: left + t * 0, x: top + t * 1 },
    c8: { y: left + t * 0, x: top + t * 2 }, d8: { y: left + t * 0, x: top + t * 3 },
    e8: { y: left + t * 0, x: top + t * 4 }, f8: { y: left + t * 0, x: top + t * 5 },
    g8: { y: left + t * 0, x: top + t * 6 }, h8: { y: left + t * 0, x: top + t * 7 },
    // Rank 7
    a7: { y: left + t * 1, x: top + t * 0 }, b7: { y: left + t * 1, x: top + t * 1 },
    c7: { y: left + t * 1, x: top + t * 2 }, d7: { y: left + t * 1, x: top + t * 3 },
    e7: { y: left + t * 1, x: top + t * 4 }, f7: { y: left + t * 1, x: top + t * 5 },
    g7: { y: left + t * 1, x: top + t * 6 }, h7: { y: left + t * 1, x: top + t * 7 },
    // Rank 6
    a6: { y: left + t * 2, x: top + t * 0 }, b6: { y: left + t * 2, x: top + t * 1 },
    c6: { y: left + t * 2, x: top + t * 2 }, d6: { y: left + t * 2, x: top + t * 3 },
    e6: { y: left + t * 2, x: top + t * 4 }, f6: { y: left + t * 2, x: top + t * 5 },
    g6: { y: left + t * 2, x: top + t * 6 }, h6: { y: left + t * 2, x: top + t * 7 },
    // Rank 5
    a5: { y: left + t * 3, x: top + t * 0 }, b5: { y: left + t * 3, x: top + t * 1 },
    c5: { y: left + t * 3, x: top + t * 2 }, d5: { y: left + t * 3, x: top + t * 3 },
    e5: { y: left + t * 3, x: top + t * 4 }, f5: { y: left + t * 3, x: top + t * 5 },
    g5: { y: left + t * 3, x: top + t * 6 }, h5: { y: left + t * 3, x: top + t * 7 },
    // Rank 4
    a4: { y: left + t * 4, x: top + t * 0 }, b4: { y: left + t * 4, x: top + t * 1 },
    c4: { y: left + t * 4, x: top + t * 2 }, d4: { y: left + t * 4, x: top + t * 3 },
    e4: { y: left + t * 4, x: top + t * 4 }, f4: { y: left + t * 4, x: top + t * 5 },
    g4: { y: left + t * 4, x: top + t * 6 }, h4: { y: left + t * 4, x: top + t * 7 },
    // Rank 3
    a3: { y: left + t * 5, x: top + t * 0 }, b3: { y: left + t * 5, x: top + t * 1 },
    c3: { y: left + t * 5, x: top + t * 2 }, d3: { y: left + t * 5, x: top + t * 3 },
    e3: { y: left + t * 5, x: top + t * 4 }, f3: { y: left + t * 5, x: top + t * 5 },
    g3: { y: left + t * 5, x: top + t * 6 }, h3: { y: left + t * 5, x: top + t * 7 },
    // Rank 2
    a2: { y: left + t * 6, x: top + t * 0 }, b2: { y: left + t * 6, x: top + t * 1 },
    c2: { y: left + t * 6, x: top + t * 2 }, d2: { y: left + t * 6, x: top + t * 3 },
    e2: { y: left + t * 6, x: top + t * 4 }, f2: { y: left + t * 6, x: top + t * 5 },
    g2: { y: left + t * 6, x: top + t * 6 }, h2: { y: left + t * 6, x: top + t * 7 },
    // Rank 1
    a1: { y: left + t * 7, x: top + t * 0 }, b1: { y: left + t * 7, x: top + t * 1 },
    c1: { y: left + t * 7, x: top + t * 2 }, d1: { y: left + t * 7, x: top + t * 3 },
    e1: { y: left + t * 7, x: top + t * 4 }, f1: { y: left + t * 7, x: top + t * 5 },
    g1: { y: left + t * 7, x: top + t * 6 }, h1: { y: left + t * 7, x: top + t * 7 }
};
const positions = [
    [pos.a1, pos.a2, pos.a3, pos.a4, pos.a5, pos.a6, pos.a7, pos.a8],
    [pos.b1, pos.b2, pos.b3, pos.b4, pos.b5, pos.b6, pos.b7, pos.b8],
    [pos.c1, pos.c2, pos.c3, pos.c4, pos.c5, pos.c6, pos.c7, pos.c8],
    [pos.d1, pos.d2, pos.d3, pos.d4, pos.d5, pos.d6, pos.d7, pos.d8],
    [pos.e1, pos.e2, pos.e3, pos.e4, pos.e5, pos.e6, pos.e7, pos.e8],
    [pos.f1, pos.f2, pos.f3, pos.f4, pos.f5, pos.f6, pos.f7, pos.f8],
    [pos.g1, pos.g2, pos.g3, pos.g4, pos.g5, pos.g6, pos.g7, pos.g8],
    [pos.h1, pos.h2, pos.h3, pos.h4, pos.h5, pos.h6, pos.h7, pos.h8]
];

// Converts algebraic notations into positions[file][rank]
function algPos(notation: string) {
    let file = notation[0].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
    let rank = parseInt(notation[1]) - 1;
    return positions[file][rank];
}
// Ditto but reversed
function posAlg(position: { y: number, x: number }) {
    const file = String.fromCharCode('A'.charCodeAt(0) + position.x);
    const rank = (position.y + 1).toString();
    return file + rank;
}

// Piece creator
function createPiece(post: { x: number; y: number }, isBlack: boolean, pieceType: string) {
    let img;   

    if(pieceType == "king") {
        if(!isBlack) {
            img = assets.image`wk`;
        } else {
            img = assets.image`bk`;
        }
    } else if(pieceType == "queen") {
        if(!isBlack) {
            img = assets.image`wq`;
        } else {
            img = assets.image`bq`;
        }
    } else if(pieceType == "rook") {
        if(!isBlack) {
            img = assets.image`wr`;
        } else {
            img = assets.image`br`;
        }
    } else if(pieceType == "bishop") {
        if(!isBlack) {
            img = assets.image`wb`;
        } else {
            img = assets.image`bb`;
        }
    } else if(pieceType == "knight") {
        if(!isBlack) {
            img = assets.image`wn`;
        } else {
            img = assets.image`bn`;
        }
    } else if(pieceType == "pawn") {
        if(!isBlack) {
            img = assets.image`wp`;
        } else {
            img = assets.image`bp`;
        }
    }

    let x = sprites.create(img, SpriteKind.Piece);

    sprites.setDataBoolean(x, "isBlack", isBlack);
    sprites.setDataString(x, "pieceType", pieceType);

    x.setPosition(post.x, post.y)
    x.setStayInScreen(true);
    return x;
}

// Selector creator
function createSelector(post: { x: number; y: number }, cont: controller.Controller) {
    let img;

    if(cont == controller.player1) {
        img = assets.image`selector1`;
    } else {
        img = assets.image`selector2`;
    }

    let x = sprites.create(img, SpriteKind.Player);
    x.setPosition(post.x, post.y);
    x.setStayInScreen(true);
    cont.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
        if(x.x == algPos("a1").x) {
            x.x -= 0;
        } else {
            x.x -= t;
        }
    });
    cont.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Repeated, function () {
        if(x.x == algPos("a1").x) {
            x.x -= 0;
        } else {
            x.x -= t;
        }
    });
    cont.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
        if(x.y == algPos("a8").y) {
            x.y -= 0;
        } else {
            x.y -= t;
        }
    });
    cont.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Repeated, function () {
        if(x.y == algPos("a8").y) {
            x.y -= 0;
        } else {
            x.y -= t;
        }
    });
    cont.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
        if(x.x == algPos("h1").x) {
            x.x += 0;
        } else {
            x.x += t;
        }
    });
    cont.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Repeated, function () {
        if(x.x == algPos("h1").x) {
            x.x += 0;
        } else {
            x.x += t;
        }
    });
    cont.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
        if(x.y == algPos("a1").y) {
            x.y += 0;
        } else {
            x.y += t;
        }
    });
    cont.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Repeated, function () {
        if(x.y == algPos("a1").y) {
            x.y += 0;
        } else {
            x.y += t;
        }
    });
    return x;
}

// Set pieces
function setPieces() {
    // Black pieces
    bra = createPiece(algPos("a8"), true, "rook");     // Rook (A file)
    bnb = createPiece(algPos("b8"), true, "knight");   // Knight (B file)
    bbc = createPiece(algPos("c8"), true, "bishop");   // Bishop (C file)
    bqd = createPiece(algPos("d8"), true, "queen");    // Queen
    bke = createPiece(algPos("e8"), true, "king");     // King
    bbf = createPiece(algPos("f8"), true, "bishop");   // Bishop (F file)
    bng = createPiece(algPos("g8"), true, "knight");   // Knight (G file)
    brh = createPiece(algPos("h8"), true, "rook");     // Rook (H file)
    bpa = createPiece(algPos("a7"), true, "pawn");     // Pawn (A file)
    bpb = createPiece(algPos("b7"), true, "pawn");     // Pawn (B file)
    bpc = createPiece(algPos("c7"), true, "pawn");     // Pawn (C file)
    bpd = createPiece(algPos("d7"), true, "pawn");     // Pawn (D file)
    bpe = createPiece(algPos("e7"), true, "pawn");     // Pawn (E file)
    bpf = createPiece(algPos("f7"), true, "pawn");     // Pawn (F file)
    bpg = createPiece(algPos("g7"), true, "pawn");     // Pawn (G file)
    bph = createPiece(algPos("h7"), true, "pawn");     // Pawn (H file)

    // White pieces
    wra = createPiece(algPos("a1"), false, "rook");    // Rook (A file)
    wnb = createPiece(algPos("b1"), false, "knight");  // Knight (B file)
    wbc = createPiece(algPos("c1"), false, "bishop");  // Bishop (C file)
    wqd = createPiece(algPos("d1"), false, "queen");   // Queen
    wke = createPiece(algPos("e1"), false, "king");    // King
    wbf = createPiece(algPos("f1"), false, "bishop");  // Bishop (F file)
    wng = createPiece(algPos("g1"), false, "knight");  // Knight (G file)
    wrh = createPiece(algPos("h1"), false, "rook");    // Rook (H file)
    wpa = createPiece(algPos("a2"), false, "pawn");    // Pawn (A file)
    wpb = createPiece(algPos("b2"), false, "pawn");    // Pawn (B file)
    wpc = createPiece(algPos("c2"), false, "pawn");    // Pawn (C file)
    wpd = createPiece(algPos("d2"), false, "pawn");    // Pawn (D file)
    wpe = createPiece(algPos("e2"), false, "pawn");    // Pawn (E file)
    wpf = createPiece(algPos("f2"), false, "pawn");    // Pawn (F file)
    wpg = createPiece(algPos("g2"), false, "pawn");    // Pawn (G file)
    wph = createPiece(algPos("h2"), false, "pawn");    // Pawn (H file)
}

// Check location
function checkLocation(post: {x: number, y: number}) {}

// Check valid moves (specific), self-explanatory
function checkValidMoves_King(sprite: Sprite) {}
function checkValidMoves_Queen(sprite: Sprite) {}
function checkValidMoves_Rook(sprite: Sprite) {}
function checkValidMoves_Bishop(sprite: Sprite) {}
function checkValidMoves_Knight(sprite: Sprite) {}
function checkValidMoves_Pawn(sprite: Sprite) {}

// Check valid moves
function checkValidMoves(sprite: Sprite) {
    if(sprites.readDataString(sprite, "pieceType") == "king") {
        checkValidMoves_King(sprite);
    } else if(sprites.readDataString(sprite, "pieceType") == "queen") {
        checkValidMoves_Queen(sprite);
    } else if(sprites.readDataString(sprite, "pieceType") == "rook") {
        checkValidMoves_Rook(sprite);
    } else if(sprites.readDataString(sprite, "pieceType") == "bishop") {
        checkValidMoves_Bishop(sprite);
    } else if(sprites.readDataString(sprite, "pieceType") == "knight") {
        checkValidMoves_Knight(sprite);
    } else if(sprites.readDataString(sprite, "pieceType") == "pawn") {
        checkValidMoves_Pawn(sprite);
    }
}

// Check if there is a check on the king
function isKingInCheck() {}

// Select piece
function selectPiece(sprite: Sprite) {}

// Move a piece to destination
function movePiece(sprite: Sprite, dest: {x: number, y: number}) {}

// Initialize the game (not the chess)
function init() {
    stage = 0;
    scene.setBackgroundImage(assets.image`startup`);
}

// Start the game (the chess) and initialize it
function startGame() {
    stage = 1;
    scene.setBackgroundImage(assets.image`bg_w`);
    setPieces();

    // Selector 1 (white)
    let selector1 = createSelector(pos.a2, controller.player1);

    // Selector 2 (black)
    let selector2 = createSelector(pos.a7, controller.player2);
}

// Main function
function main() {
    init();
}

// Check buttons
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if(stage === 1 && selector1.overlapsWith(null)) {
    
    }
});
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if(stage === 0) {
        pause(100);
        startGame();
    }
});

// Run main
main();