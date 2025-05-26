<script>
        // 명언 데이터 배열
        const quotes = [
            {
                text: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 중요한 것은 계속하려는 용기이다.",
                author: "윈스턴 처칠"
            },
            {
                text: "네가 할 수 있다고 믿든 할 수 없다고 믿든, 네가 옳다.",
                author: "헨리 포드"
            },
            {
                text: "인생은 용감한 모험이거나 아무것도 아니다.",
                author: "헬렌 켈러"
            },
            {
                text: "자신이 될 수 있는 가장 높은 곳에 도달하기 위해 노력하라.",
                author: "오프라 윈프리"
            },
            {
                text: "행복은 미리 만들어진 것이 아니다. 그것은 당신의 행동에서 나온다.",
                author: "달라이 라마"
            },
            {
                text: "가장 큰 영광은 결코 넘어지지 않는 것에 있는 것이 아니라, 넘어질 때마다 일어서는 것에 있다.",
                author: "넬슨 만델라"
            }
        ];

        let currentQuoteIndex = 0; // 현재 명언 인덱스
        const quoteTextElement = document.getElementById('quote-text'); // 명언 텍스트 요소
        const quoteAuthorElement = document.getElementById('quote-author'); // 명언 작가 요소
        const nextQuoteButton = document.getElementById('next-quote-btn'); // 다음 명언 버튼

        /**
         * 명언을 표시하는 함수
         * @param {number} index - 표시할 명언의 인덱스
         */
        function displayQuote(index) {
            // 현재 명언 숨기기 (페이드 아웃 효과)
            quoteTextElement.classList.remove('opacity-100');
            quoteTextElement.classList.add('opacity-0');
            quoteAuthorElement.classList.remove('opacity-100');
            quoteAuthorElement.classList.add('opacity-0');

            // 딜레이 후 새로운 명언 표시 (페이드 인 효과)
            setTimeout(() => {
                const quote = quotes[index];
                quoteTextElement.textContent = `"${quote.text}"`;
                quoteAuthorElement.textContent = `- ${quote.author} -`;
                quoteTextElement.classList.remove('opacity-0');
                quoteTextElement.classList.add('opacity-100');
                quoteAuthorElement.classList.remove('opacity-0');
                quoteAuthorElement.classList.add('opacity-100');
            }, 300); // 300ms 딜레이
        }

        /**
         * 다음 명언으로 이동하는 함수
         */
        function goToNextQuote() {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // 다음 인덱스로 이동 (마지막이면 처음으로)
            displayQuote(currentQuoteIndex); // 새로운 명언 표시
        }

        // 페이지 로드 시 첫 번째 명언 표시
        window.onload = function() {
            displayQuote(currentQuoteIndex);
        };

        // 버튼 클릭 이벤트 리스너 추가
        nextQuoteButton.addEventListener('click', goToNextQuote);
    </script>