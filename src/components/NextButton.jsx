export default function NextButton({ page, pages }) {
  const next = page + 1;
  const ok = next <= pages;
  return (
    <div>
      {ok ? (
        <a className="hover:underline hover:text-red-700" href={`/learning-ruby-on-rails/path/part-${next}`}>
          Part {next}
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}
