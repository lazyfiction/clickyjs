define({
    stages: {
        mainHall: {
            imgsrc: "mainHall.png",
            colMap: "mainHallCol.png",
            camera: {
                pos: [0, 0, - 1],
                lookAt: [0, 0, 0]
            },
            plane: {
                pos: [0, - 1, 0],
                n: [0, 1, 0],
            }
        },
        kitchen: {
            imgsrx: "kitchen.png",
            colMap: "kitchenCol.png",
            camera: {
                pos: [0, 0, - 1],
                lookAt: [0, 0, 0]
            },
            plane: {
                pos: [0, - 1, 0],
                n: [0, 1, 0],
            }
        }
    },
    stageConnections: [
        ["kitchen", "mainHall"]
    ]
});