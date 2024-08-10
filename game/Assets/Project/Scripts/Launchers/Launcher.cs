using System.Collections;
using UnityEngine;

namespace DefaultNamespace
{
    public class Launcher : MonoBehaviour
    {
        [SerializeField] private GameObject rocketPrefab;
        [SerializeField] private float spawnInterval = 5f; // x seconds
        [SerializeField] private int rocketsPerInterval = 3; // y rockets

        private void Start()
        {
            StartCoroutine(SpawnRocketsPeriodically());
        }

        private IEnumerator SpawnRocketsPeriodically()
        {
            while (true)
            {
                for (int i = 0; i < rocketsPerInterval; i++)
                {
                    SpawnRocket(transform.position);
                }
                yield return new WaitForSeconds(spawnInterval);
            }
        }
        public void SpawnRocket(Vector3 position)
        {
            float randomAngle = Random.Range(20f, 70f);
            Quaternion rotation = Quaternion.Euler(0, 0, randomAngle);
            GameObject rocketInstance = Instantiate(rocketPrefab, position, rotation);
            Rocket rocket = rocketInstance.GetComponent<Rocket>();
            Vector2 direction = new Vector2(Mathf.Cos(randomAngle * Mathf.Deg2Rad), Mathf.Sin(randomAngle * Mathf.Deg2Rad));
            rocket.Launch(direction);
        }
    }
}