---
### 분당 TANGO DataDog > 성능관리 > K8S관련 정리
| 카테고리 | 소분류 | 형식 | 설명 |
|---|---|---|---|
| Pods | Runnig pods | Chart | 현재 runnug 상태인 pods의 개수 |
| Pods | Pods Runnig(changed weekly) | Change(변화그래) | 한시간,1일전,일주일전,1달전 running 상태인 pods의 합계 차이를 나타내는 그래프 (+,-) |
| Pods | Pod Status | Card | POD의 상태별 갯수 (Running(pod phase:Running), Critical(pod phase:Failed), Minor(pod phase:Pending), Warning(pod phase:Succeeded))  |
| Pods | Alarm/Event List | Grid | 이슈가 있는 pod 의 nodegroup, pod명, 상태, 개수를 나타내는 grid |
| Pods | CPU Usage by Pod | Chart | POD의 시간추이별 CPU 사용량 |
| Pods | CPU-intensive pods | Grid | 상대적으로 CPU 사용량이 높은 POD |
| Pods | Memory Usage by Pod | Chart | POD의 시간추이별 Memory 사용량 |
| Pods | Memory-intensive pods | Grid | 상대적으로 Memory 사용량이 높은 POD |
| Pods | Pod's Block IO issue count | Chart | POD에서 발생한 디스크입출력 관련 문제 횟수 또는 비정상적 패턴 감지 횟수 |
| Pods | EphemeralStorage-intensive pods | Grid | 임시 스토리지를 과도하게 사용하는 POD |
| Container | Container States | Chart | 시간추이에 따른 Container 상태 별(Ready,Running,Terminated,Waiting) container 개수 |
| Container | Container States | Card | Container 상태 별(Ready,Running,Terminated,Waiting) container 개수 |
| Container | Container Restart Count | Chart | 시간추이에 따른 container restart 횟수 |
| Container | Container OOM killed (by Pod) | Chart | 시간추이에 따른 pod내 container OOMkilled 횟 |
| Container | CPU Usage by Container | Chart | Container의 시간추이별 CPU 사용량 |
| Container | Memory Usage by Container | Chart | Container의 시간추이별 Memory 사용량 |
| Container | Network Rate (Receive) | Chart | container가 외부로부터 수신한 네트워크 트래픽 속도 |
| Container | Network Rate (Transmitted) | Chart | container가 외부로 전송한 네트워크 트래픽 속도 |
| Container | IO Write bytes | Chart | container가 스토리지에 기록한 총 byte수(얼마나 많은 데이터를 저장했는가) |
| Container | Container CPU/MEM Scatter chart | Scatter(산점도그래프) | x축: CPU사용률, y축: 메모리사용 |
