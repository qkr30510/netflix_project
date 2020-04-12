import Link from 'next/link';

const HeaderStyle = {
    display: "flex",
    flex: 1,
    background:"#141414",
    height:"68px",
    alignItems:"center",
    justifyContent:"spaceAround"
}

const Header = () => (
    <div style={HeaderStyle}>
        <Link href="/">
            <a >홈</a>
        </Link>
        <Link href="/TvProgram">
            <a >티비 프로그램</a>
        </Link>                
        <Link href="/Movie">
            <a >영화</a>
        </Link>        
        <Link href="/LatestContents">
            <a >최신 콘텐츠</a>
        </Link>                
        <Link href="/MyList">
            <a >티비 프로그램</a>
        </Link>                                

    </div>
)

export default Header;