import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 1호선, 2호선 <b>신도림역 1번 출구</b> 나와서
            <br />
            → 광장 계단을 따라 직진
            <br />
            → 도로 앞 횡단보도 오른쪽으로 <b>라마다 호텔 셔틀버스</b> 이용 가능
            <br />
            ※ 셔틀 간격 5분, 소요 시간 약 2-3분
            <br />
            → 또는 도보로 10분 가능
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            <b>신도링동.구로역(중)</b>하차
            <br />
            → 도보로 2분 이동
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>신도림 라마다 호텔</b> 검색
            <br />
            → 호텔 건물 내 주차장 이용 가능
            <br />
          </div>
          <div />
          <div className="content">
            <b>
              ※ 주차는 90분 무료로 이용 가능합니다.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
