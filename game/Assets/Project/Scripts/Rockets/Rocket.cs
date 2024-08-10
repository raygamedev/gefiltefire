using System;
using UnityEngine;

namespace DefaultNamespace
{
    public class Rocket : MonoBehaviour
    {
        private float _speed = 100f;
        [SerializeField] private float _launchPower = 3000f;
        private Rigidbody2D _rigidbody2D;

        private void Awake()
        {
            _rigidbody2D = GetComponent<Rigidbody2D>();
        }

        private void Start()
        {

            _rigidbody2D.AddForce(Vector2.up * _launchPower, ForceMode2D.Force);
            Debug.Log("Rocket launched!");
        }
        public void Launch(Vector2 direction)
        {
            _rigidbody2D.AddForce(direction * _launchPower, ForceMode2D.Force);
            float angle = -1 * Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
            transform.rotation = Quaternion.Euler(new Vector3(0, 0, angle));
        }
    }
}