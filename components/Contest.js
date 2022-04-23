import Link from 'next/link'

const Contest = ({ contest, id }) => {
  return (
    <div className="contest">
        <div className="info">
            <h3>{contest.name}</h3>
            <pre>
            <h5>Start Date : {contest.start_time.substring(0,10)} -- Start Time : {contest.start_time.substring(11,16)}</h5>
            <h5>End Date   : {contest.end_time.substring(0,10)} -- End Time   : {contest.end_time.substring(11,16)}</h5>
            </pre>

            <p>Platform : {contest.site}</p>
        </div>
        <div className="link">
            <Link href={contest.url}>
                <a>Contest Info</a>
            </Link>
        </div>
    </div>
  );
};

export default Contest;
