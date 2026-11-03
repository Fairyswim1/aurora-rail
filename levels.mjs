export const levels=[
  {
    "title": "원점을 향한 선로",
    "nodes": [
      [
        1,
        1
      ],
      [
        2,
        2
      ],
      [
        4,
        4
      ],
      [
        1,
        3
      ]
    ],
    "start": 0,
    "goal": 2,
    "stars": [
      1
    ],
    "tickets": {
      "direct": 2,
      "inverse": 0
    },
    "decision": "정비례: y÷x가 같은 역을 찾아요.",
    "id": 1
  },
  {
    "title": "곱을 지키는 여행",
    "nodes": [
      [
        1,
        6
      ],
      [
        2,
        3
      ],
      [
        3,
        2
      ],
      [
        6,
        1
      ],
      [
        4,
        4
      ]
    ],
    "start": 0,
    "goal": 3,
    "stars": [
      1,
      2
    ],
    "tickets": {
      "direct": 0,
      "inverse": 3
    },
    "decision": "반비례: x×y가 같은 역을 찾아요.",
    "id": 2
  },
  {
    "title": "갈아타는 작은 역",
    "nodes": [
      [
        1,
        1
      ],
      [
        2,
        2
      ],
      [
        1,
        4
      ],
      [
        2,
        8
      ],
      [
        3,
        3
      ]
    ],
    "start": 0,
    "goal": 3,
    "stars": [
      1,
      2
    ],
    "tickets": {
      "direct": 2,
      "inverse": 1
    },
    "decision": "한 역에서 식을 바꾸어 갈아타요.",
    "id": 3
  },
  {
    "title": "멀리 있는 별부터",
    "nodes": [
      [
        1,
        2
      ],
      [
        2,
        1
      ],
      [
        4,
        2
      ],
      [
        2,
        4
      ],
      [
        1,
        8
      ],
      [
        4,
        8
      ]
    ],
    "start": 0,
    "goal": 4,
    "stars": [
      1,
      2,
      3
    ],
    "tickets": {
      "direct": 1,
      "inverse": 3
    },
    "decision": "가까운 종착역보다 방문할 별의 순서가 먼저예요.",
    "id": 4
  },
  {
    "title": "돌아올 표 한 장",
    "nodes": [
      [
        3,
        6
      ],
      [
        1,
        8
      ],
      [
        8,
        1
      ],
      [
        2,
        1
      ],
      [
        6,
        3
      ],
      [
        4,
        2
      ]
    ],
    "start": 0,
    "goal": 1,
    "stars": [
      2,
      3
    ],
    "decision": "방문할 별까지 가는 길과 돌아올 표를 함께 남겨요.",
    "tickets": {
      "direct": 2,
      "inverse": 3
    },
    "id": 5
  },
  {
    "title": "엇갈린 환승",
    "nodes": [
      [
        1,
        8
      ],
      [
        4,
        2
      ],
      [
        3,
        6
      ],
      [
        2,
        1
      ],
      [
        6,
        3
      ],
      [
        8,
        1
      ],
      [
        1,
        2
      ]
    ],
    "start": 0,
    "goal": 1,
    "stars": [
      2,
      3
    ],
    "decision": "두 선로가 만나는 환승역을 먼저 찾아요.",
    "tickets": {
      "direct": 3,
      "inverse": 3
    },
    "id": 6
  },
  {
    "title": "별을 잇는 순서",
    "nodes": [
      [
        2,
        2
      ],
      [
        1,
        1
      ],
      [
        2,
        8
      ],
      [
        4,
        1
      ],
      [
        3,
        3
      ],
      [
        6,
        6
      ],
      [
        1,
        4
      ],
      [
        4,
        4
      ]
    ],
    "start": 0,
    "goal": 1,
    "stars": [
      2,
      3
    ],
    "decision": "가까운 별부터 모으면 다른 별에 닿지 못할 수 있어요.",
    "tickets": {
      "direct": 2,
      "inverse": 3
    },
    "id": 7
  },
  {
    "title": "종착역 너머의 별",
    "nodes": [
      [
        3,
        3
      ],
      [
        6,
        6
      ],
      [
        2,
        2
      ],
      [
        1,
        1
      ],
      [
        2,
        8
      ],
      [
        4,
        4
      ],
      [
        4,
        1
      ],
      [
        8,
        2
      ],
      [
        1,
        4
      ]
    ],
    "start": 0,
    "goal": 1,
    "stars": [
      2,
      3,
      4
    ],
    "decision": "종착역에 먼저 갔어도 남은 별을 모아 돌아와야 해요.",
    "tickets": {
      "direct": 4,
      "inverse": 2
    },
    "id": 8
  },
  {
    "title": "꼭 남겨 둘 승차권",
    "nodes": [
      [
        3,
        6
      ],
      [
        4,
        2
      ],
      [
        6,
        3
      ],
      [
        1,
        8
      ],
      [
        2,
        1
      ],
      [
        1,
        2
      ]
    ],
    "start": 0,
    "goal": 1,
    "stars": [
      2,
      3,
      4
    ],
    "decision": "정비례와 반비례 표의 수를 따로 세어 계획해요.",
    "tickets": {
      "direct": 2,
      "inverse": 3
    },
    "id": 9
  },
  {
    "title": "두 갈래의 약속",
    "nodes": [
      [
        8,
        2
      ],
      [
        4,
        1
      ],
      [
        2,
        2
      ],
      [
        4,
        4
      ],
      [
        2,
        8
      ],
      [
        6,
        6
      ],
      [
        3,
        3
      ]
    ],
    "start": 0,
    "goal": 1,
    "stars": [
      2,
      3,
      4
    ],
    "decision": "별의 방문 순서를 바꾸면 필요한 표가 달라져요.",
    "tickets": {
      "direct": 1,
      "inverse": 3
    },
    "id": 10
  },
  {
    "title": "되돌아오는 선로",
    "nodes": [
      [
        6,
        3
      ],
      [
        4,
        2
      ],
      [
        1,
        8
      ],
      [
        2,
        1
      ],
      [
        1,
        2
      ],
      [
        8,
        1
      ],
      [
        3,
        6
      ]
    ],
    "start": 0,
    "goal": 1,
    "stars": [
      2,
      3,
      4
    ],
    "decision": "한 번 간 역을 다시 지나는 길도 생각해요.",
    "tickets": {
      "direct": 2,
      "inverse": 4
    },
    "id": 11
  },
  {
    "title": "오로라의 마지막 열차",
    "nodes": [
      [
        8,
        2
      ],
      [
        2,
        8
      ],
      [
        4,
        4
      ],
      [
        3,
        3
      ],
      [
        4,
        1
      ],
      [
        2,
        2
      ],
      [
        1,
        4
      ],
      [
        6,
        6
      ],
      [
        1,
        1
      ]
    ],
    "start": 0,
    "goal": 1,
    "stars": [
      2,
      3,
      4
    ],
    "decision": "비율·곱·환승 순서와 남길 표를 함께 판단해요.",
    "tickets": {
      "direct": 3,
      "inverse": 2
    },
    "id": 12
  }
];
