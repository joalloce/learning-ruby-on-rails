export default function PreviousButton({ page }) {
  const previous = page - 1;
  const ok = previous !== 0;
  return (
    <div>
      {ok ? (
        <a className="hover:underline hover:text-red-700" href={`/learning-ruby-on-rails/path/part-${previous}`}>
          Part {previous}
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}
